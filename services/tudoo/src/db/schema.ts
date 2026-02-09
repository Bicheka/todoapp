import { integer, pgTable, text } from "drizzle-orm/pg-core";

export const todoLists = pgTable("todo_lists", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: text("title").notNull(),
});