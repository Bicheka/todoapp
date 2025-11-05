import type { Request, Response, NextFunction } from "express";
import pool from "../database/db";
import { updateTodoListField } from "./service";

export const getAllTodoLists = async (_: Request, res: Response) => {
  try {
    const response = await pool.query(`
          SELECT * FROM todo_lists;
          `);
    res.send(response.rows);
  } catch (error) {
    // send to error middleware
  }
};

export const createTodoList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { list_title, done, total } = req.body;
    const response = await pool.query(
      `
      INSERT INTO todo_lists (list_title, done, total)
      VALUES ($1, $2, $3) RETURNING *;
      `,
      [list_title, done, total]
    );
    res.send(response.rows).status(201);
  } catch (err) {
    next(err);
  }
};

export const updateField = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const fields = req.body;

  if (!fields || Object.keys(fields).length === 0) {
    next(new Error("No fields were updated"));
  }

  try {
    updateTodoListField(Number(id), fields);
  } catch (err) {
    next(err);
  }
};

export const updateTodoList = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { lis_title, done, total } = req.body;
    const response = await pool.query(
      `
      UPDATE todo-lists SET list_title = $1, done=$2, total=$3 WHERE id=$4 RETURNING *
      `,
      [lis_title, done, total, id]
    );
    res.send(response).status(200);
  } catch (error) {
    // Send to error middleware
  }
};

export const deleteTodoList = async (req: Request, res: Response) => {};
