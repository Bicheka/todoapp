import type { Request, Response, NextFunction } from "express";
import pool from "../database/db";
import * as service from "./service";
import type { TodoListDTO, TodoListResponseDTO } from "./todo-list-dto";

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

export const updateTodoList = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    if(!id) {
      next(new Error("Invalid id format"));
    }
    // Extract body (list_title, done, total, etc.)
    const updatedFields: Partial<TodoListDTO> = req.body;

    const response: TodoListResponseDTO = await service.updateTodoList(Number(id), updatedFields);

    res.send(response).status(200);
  } catch (err) {
    next(err);
  }
};

export const deleteTodoList = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id: number = Number(req.params.id);
    await service.deleteTodoList(id)
    res.sendStatus(204);
  }
  catch (err){
    next(err);
  }
};
