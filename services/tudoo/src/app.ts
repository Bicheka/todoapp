import { Scalar } from "@scalar/hono-api-reference";
import { logger } from "hono/logger";
import { authMiddleware } from "./auth/auth-middleware";
import { todoListsRouter } from "./modules/todo-list";
import { createOpenAPIDoc, createRouter } from "./openapi";

export default function createApp() {
	const app = createRouter();
	app.use(logger());
	
	app.openAPIRegistry.registerComponent('securitySchemes', 'BearerAuth', {
  type: 'http',
  scheme: 'bearer',
  bearerFormat: 'JWT',
})
	app.get("/doc", (c) => c.json(createOpenAPIDoc(app)));


	app.get("/scalar", Scalar({ url: "/doc" }));
	app.use(authMiddleware);
	const routers = [{ path: "/todo-lists", router: todoListsRouter }];

	for (const { path, router } of routers) {
		app.route(path, router);
	}

	// TODO:
	// app.notFound(notFound);
	// app.onError(onError);
	return app;
}
