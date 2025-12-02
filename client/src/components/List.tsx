import { useNavigate } from "react-router";
import type { TodoListItem } from "../types";

function TodoList(prop: TodoListItem) {
    const navigate = useNavigate();
    return (
    <li onClick={() => navigate(`/todo/${prop.listTitle}/${prop.id}`)} className="flex justify-between my-4 p-3 rounded-xl shadow-md bg-yellow-200 cursor-pointer ">
        <h3>{prop.listTitle}</h3>
        <p>{prop.done}/{prop.total}</p>
    </li>
    )
}

export default TodoList