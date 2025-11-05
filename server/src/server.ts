import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import todoListRouter from "./todo-list/routes";
import { initTables } from "./database/db";
import errorHandling from "./middleware/error/error-handler";
const app = express();

const PORT = process.env.PORT || 3001;

initTables();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// Routes
app.use("/api/todo-list", todoListRouter);

app.use(errorHandling);

// initialize database and then initialize server
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
