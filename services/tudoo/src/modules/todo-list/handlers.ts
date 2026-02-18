import type { RouteHandler } from "@hono/zod-openapi";
import { eq } from "drizzle-orm";
import type { Context } from "hono";
import { db } from "../../db";
import { todoLists } from "../../db/schema";
import type { routes } from "./routes";

export const handlers = {
	getTodoLists: (async (c: Context) => {
		const userId = c.get("userId");

		const lists = await db
			.select()
			.from(todoLists)
			.where(eq(todoLists.userId, userId));

		return c.json(lists, 200);
	}) satisfies RouteHandler<typeof routes.getTodoLists>,

	createTodoList: (async (c: Context) => {
		const userId = c.get("userId");

		// parse request body
		const body = await c.req.json();

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
