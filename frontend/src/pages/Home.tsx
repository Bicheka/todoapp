import { For } from "solid-js";
import TodoList from "../List"

function Home() {
    return (
        <ul class="mt-20">
            <For each={lists}>
                {(item) =>
                    <TodoList listTitle={item.listTitle} done={item.done} total={item.total}/>
                }
            </For>
        </ul>
    )
}

export default Home

const lists = [
    {
        listTitle: 'Groceries',
        done: 3,
        total: 4
    },  {
    listTitle: 'ASdasd',
    done: 2,
        total: 5
    },  {
        listTitle: 'asdafgds',
        done: 7,
        total: 10
    },  {
        listTitle: 'fewrwe',
        done: 4,
        total: 5
    },  {
        listTitle: 'fgrtert',
        done: 3,
        total: 4
    },
]