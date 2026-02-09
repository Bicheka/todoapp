import { boolean, integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const todoLists = pgTable("todo_lists", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: text().notNull(),
  
  createdAt: timestamp({ withTimezone: true })
    .notNull()
    .defaultNow(),

  updatedAt: timestamp({ withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const todos = pgTable("todos", {
  id: uuid().defaultRandom().primaryKey(),

  title: text().notNull(),
  description: text(),

  completed: boolean().notNull().default(false),

  createdAt: timestamp({ withTimezone: true })
    .notNull()
    .defaultNow(),

  updatedAt: timestamp({ withTimezone: true })
    .notNull()
    .defaultNow(),
});