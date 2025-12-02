import type { TodoProperties } from "../types";

export default function Todo({title, description, completed}: TodoProperties) {
    return (
        <li className="flex snap-start list-none justify-between my-4 p-3 rounded-xl shadow-md bg-yellow-200">
            <div>
                <h4>title: {title}</h4>
                <p>{description}</p>
                <p>completed: {String(completed)}</p>
            </div>
            <div className="flex items-end gap-5">
                <button onClick={() => {alert("cliecked!")}} className="bg-blue-300 p-1 rounded cursor-pointer">done</button>
                <button onClick={() => {alert("cliecked!")}} className="bg-red-300 p-1 rounded cursor-pointer">delete</button>
            </div>
        </li>
    )
}