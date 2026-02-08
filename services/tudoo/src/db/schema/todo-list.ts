import { pgTable, text, uuid } from "drizzle-orm/pg-core";

export const todoLists = pgTable("todo_lists", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
});