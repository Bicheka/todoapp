import { createRoute, z } from "@hono/zod-openapi";
export const routes = {
	getTodoLists: createRoute({
		method: "get",
		path: "/",
		description: "get all todo lists",
		responses: {
			200: {
				description: "OK",
				content: {
					"application/json": {
						schema: z.array(
							z.object({
								title: z.string(),
							}),
						),
					},
				},
			},
		},
	}),

	// more routes
};
