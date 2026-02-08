import type { RouteHandler } from "@hono/zod-openapi";
import type { routes } from "./routes";

export const handlers = {
	getTodoLists: ((c) => {
		return c.json([{ title: "Learn Hono" }], 200);
	}) satisfies RouteHandler<typeof routes.getTodoLists>,

	// more handlers
};
