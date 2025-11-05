import express from "express";
import {
  createTodoList,
  deleteTodoList,
  getAllTodoLists,
  updateField,
  updateTodoList,
} from "./controller";
const router = express.Router();

router.get("/", getAllTodoLists);

router.post("/", createTodoList);

router.put("/specific/:id", updateField);
router.put("/:id", updateTodoList);

router.delete("/:id", deleteTodoList);

export default router;
