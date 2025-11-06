import pool from "../database/db";
import type { TodoListDTO, TodoListResponseDTO } from "./todo-list-dto";

export const getAllTodoLists = async (): Promise<TodoListResponseDTO[]> => {
  const result = await pool.query(`SELECT * FROM todo_lists`);
  return result.rows;
};

export const createTodoList = async (
  list_title: string,
  done: number,
  total: number
): Promise<TodoListResponseDTO> => {
  const result = await pool.query(
    `INSERT INTO todo_lists (list_title, done, total)
      VALUES ($1, $2, $3)
      RETURNING *;
    `,
    [list_title, done, total]
  );

  return result.rows[0]; // ✅ return a single TodoList, not the whole query result
};

export const updateTodoList = async (
  id: number,
  updatedFields: Partial<TodoListDTO>
): Promise<TodoListResponseDTO> => {
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

  const result = await pool.query(query, [...values, id]);
  const updated = result.rows[0];
  if (!updated) throw new Error(`TodoList with id ${id} not found`);

  return updated;
};

export const deleteTodoList = async (id: number): Promise<void> => {
  await pool.query("DELETE FROM todo_lists WHERE id = $1", [id]);
};
