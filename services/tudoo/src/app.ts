import { Scalar } from "@scalar/hono-api-reference";
import { logger } from "hono/logger";
import { todoListsRouter } from "./modules/todo-list";
import { createOpenAPIDoc, createRouter } from "./openapi";

export default function createApp() {
	const app = createRouter();
	app.use(logger());

	app.get("/doc", (c) => c.json(createOpenAPIDoc(app)));

	app.get("/scalar", Scalar({ url: "/doc" }));

	const routers = [{ path: "/todoLists", router: todoListsRouter }];

	for (const { path, router } of routers) {
		app.route(path, router);
	}

	// TODO:
	// app.notFound(notFound);
	// app.onError(onError);
	return app;
}
