import { createRoute, z } from "@hono/zod-openapi";
import { todoListInsertSchema, todoListSelectSchema } from "../../db/schema";

const tags = ["Todo Lists"];

export const routes = {
	getTodoLists: createRoute({
		method: "get",
		path: "/",
		tags,
		description: "get all todo lists",
		responses: {
			200: {
				description: "OK",
				content: {
					"application/json": {
						schema: z.array(todoListSelectSchema),
					},
				},
			},
		},
	}),

	createTodoList: createRoute({
		method: "post",
		path: "/",
		request: {
			body: {
				content: {
					"application/json": {
						schema: todoListInsertSchema,
					},
				},
			},
		},
		tags,
		description: "create a todo list",
		responses: {
			201: {
				description: "Created",
				content: {
					"application/json": {
						schema: todoListSelectSchema,
					},
				},
			},
		},
	}),
};
