import { Link, useParams } from "react-router";
import { getTodos } from "../../api/api";
import Todo from "../../components/Todo"
import type { TodoProperties } from "../../types"

export default function TodoView() {
    const todos = getTodos();
    const params = useParams();
    return (
        <>
        <nav className="flex gap-5 text-blue-500 font-extrabold text-xl my-10">
            <Link to="/">Home</Link>
            <Link  to={`/done/${params.listtitle}/${params.id}`}>Done</Link>
        </nav>
        
        <h1 className="text-2xl">Todo: </h1>
        <form className="flex gap-5 my-10">
            <input type="text" className="border border-gray-300 rounded w-2xl"/>
            <button type="submit" className="bg-green-300 p-1 rounded cursor-pointer">Add</button>
        </form>
        <div className="w-full h-[70vh] overflow-y-scroll p-4 snap-y snap-mandatory bg-gray-100 rounded-lg">
        {todos.map((todo: TodoProperties) => (
            <Todo key={todo.id}  {...todo}/>
        ))}
        </div>
        </>
    )
}