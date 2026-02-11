import {
	boolean,
	foreignKey,
	index,
	pgTable,
	text,
	timestamp,
	uuid,
} from "drizzle-orm/pg-core";

export const todoLists = pgTable(
	"todo_lists",
	{
		id: uuid().defaultRandom().primaryKey(),
		userId: text().notNull(),
		title: text().notNull(),

		createdAt: timestamp({ withTimezone: true }).notNull().defaultNow(),

		updatedAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
	},
	(table) => [index("user_idx").on(table.userId)],
);

export const todos = pgTable(
	"todos",
	{
		id: uuid().defaultRandom().primaryKey(),
		todoListId: uuid().notNull(),
		title: text().notNull(),
		description: text(),

		completed: boolean().notNull().default(false),

		createdAt: timestamp({ withTimezone: true }).notNull().defaultNow(),

		updatedAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
	},
	(table) => [
		foreignKey({
			columns: [table.todoListId],
			foreignColumns: [table.id],
			name: "todo_list_fk",
		}),
	],
);
