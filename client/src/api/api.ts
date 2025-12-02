import { todos, done } from "./db";

export function getTodos() {
    return todos;
}

export function getDone() {
    return done;
}