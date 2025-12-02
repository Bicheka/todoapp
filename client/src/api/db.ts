import { v4 as uuidv4 } from "uuid";
import type { TodoProperties } from "../types";

export const todos: TodoProperties[] = [
];

export const done: TodoProperties[] = [
    {
        id: uuidv4(),
        title: "Buy groceries",
        description: "Milk, eggs, bread, and coffee",
        completed: false,
    },
    {
        id: uuidv4(),
        title: "Finish React project",
        description: "Complete the routing setup and component structure",
        completed: false,
    },
    {
        id: uuidv4(),
        title: "Workout",
        description: "30-minute cardio and strength session",
        completed: true,
    },
    {
        id: uuidv4(),
        title: "Call mom",
        description: "Weekly check-in call",
        completed: false,
    },
    {
        id: uuidv4(),
        title: "Read a book",
        description: "Continue reading 'Atomic Habits'",
        completed: false,
    },
    {
        id: uuidv4(),
        title: "Plan weekend trip",
        description: "Find a hiking spot and book an Airbnb",
        completed: true,
    },
    {
        id: uuidv4(),
        title: "Buy groceries",
        description: "Milk, eggs, bread, and coffee",
        completed: false,
    },
    {
        id: uuidv4(),
        title: "Finish React project",
        description: "Complete the routing setup and component structure",
        completed: false,
    },
    {
        id: uuidv4(),
        title: "Workout",
        description: "30-minute cardio and strength session",
        completed: true,
    },
    {
        id: uuidv4(),
        title: "Call mom",
        description: "Weekly check-in call",
        completed: false,
    },
    {
        id: uuidv4(),
        title: "Read a book",
        description: "Continue reading 'Atomic Habits'",
        completed: false,
    },
    {
        id: uuidv4(),
        title: "Plan weekend trip",
        description: "Find a hiking spot and book an Airbnb",
        completed: true,
    }
];
