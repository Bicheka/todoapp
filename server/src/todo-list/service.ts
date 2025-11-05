import type { QueryResult } from "pg";
import pool from "../database/db";
export interface TodoList {
  id: number;
  title: string;
  description?: string;
  created_at?: Date;
  updated_at?: Date;
}
export const getAllTodoListsService = async (): Promise<TodoList[]> => {
  const result = await pool.query(`SELECT * FROM users`);
  return result.rows;
};

export const createTodoListService = async (
  list_title: string,
  done: number,
  total: number
): Promise<TodoList> => {
  const result = await pool.query(
    `INSERT INTO todo_lists (list_title, done, total)
      VALUES ($1, $2, $3)
      RETURNING *;
    `,
    [list_title, done, total]
  );

  return result.rows[0]; // ✅ return a single TodoList, not the whole query result
};


export const updateTodoListField = async (
  id: number,
  updatedFields: Record<string, any>
): Promise<TodoList> => {
  const keys = Object.keys(updatedFields);
  const values = Object.values(updatedFields);

  if (keys.length === 0) {
    throw new Error("No fields to update");
  }

  const setClause = keys.map((key, i) => `${key} = $${i + 1}`).join(", ");

  const query = `
    UPDATE todo_lists
    SET ${setClause}
    WHERE id = $${keys.length + 1}
    RETURNING *;
  `;

  const result: QueryResult<TodoList> = await pool.query(query, [
    ...values,
    id,
  ]);

  // Ensure an updated row was returned
  const updated = result.rows[0];
  if (!updated) {
    throw new Error(`TodoList with id ${id} not found`);
  }

  return updated;
};

export const updateTodoList = async (): Promise<void> => {};

export const deleteTodoList = async (id: number): Promise<void> => {
  await pool.query("DELETE FROM todo_lists WHERE id = $1", [id]);
};
