import { Link, useParams } from "react-router";
import { getDone } from "../../api/api";
import type { TodoProperties } from "../../types";
import Todo from "../../components/Todo";


export default function DoneView() {
    const params = useParams();
    const done = getDone();
    return (
        <>
            <nav className="flex gap-5 text-blue-500 font-extrabold text-xl my-10">
                <Link to="/">Home</Link>
                <Link  to={`/todo/${params.listtitle}/${params.id}`}>Todo</Link>
            </nav>
            
            <div className="w-full h-[70vh] overflow-y-scroll p-4 snap-y snap-mandatory bg-gray-100 rounded-lg">
                {done.map((done: TodoProperties) => (
                    <Todo key={done.id}  {...done}/>
                ))}
            </div>
        </>
    )
}