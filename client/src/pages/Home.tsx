// import { For } from "solid-js";
import TodoList from "../components/List";
import { v4 as uuidv4 } from "uuid";
import type { TodoListItem } from "../types";

function Home() {
    return (
        <ul className="mt-20">
            {lists.map((item) => (
                <TodoList
                    key={item.id}
                    id={item.id}
                    listTitle={item.listTitle}
                    done={item.done}
                    total={item.total}
                />
            ))}
        </ul>
    );
}

export default Home;

const lists: TodoListItem[] = [
    {
        id: uuidv4(),
        listTitle: "Groceries",
        done: 3,
        total: 4,
    },
    {
        id: uuidv4(),
        listTitle: "ASdasd",
        done: 2,
        total: 5,
    },
    {
        id: uuidv4(),
        listTitle: "asdafgds",
        done: 7,
        total: 10,
    },
    {
        id: uuidv4(),
        listTitle: "fewrwe",
        done: 4,
        total: 5,
    },
    {
        id: uuidv4(),
        listTitle: "fgrtert",
        done: 3,
        total: 4,
    },
];
