import type { RouteHandler } from "@hono/zod-openapi";
import { and, eq, inArray } from "drizzle-orm";
import { db } from "../../db";
import { todoLists } from "./todo-list.db";
import type { routes } from "./todo-list.routes";

export const handlers = {
	getTodoLists: (async (c) => {
		const userId = c.get("userId");

		const lists = await db
			.select()
			.from(todoLists)
			.where(eq(todoLists.userId, userId));

		return c.json(lists, 200);
	}) satisfies RouteHandler<typeof routes.getTodoLists>,

	createTodoList: (async (c) => {
		const userId = c.get("userId");

		// parse request body
		const body = c.req.valid("json");
		// insert into db
		const [list] = await db
			.insert(todoLists)
			.values({
				...body,
				userId,
			})
			.returning();

		return c.json(list, 201);
	}) satisfies RouteHandler<typeof routes.createTodoList>,
};
