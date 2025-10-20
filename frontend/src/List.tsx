interface ListItem {
    listTitle: string,
    done: number,
    total: number
}

function TodoList(prop: ListItem) {

    return (
    <li class="flex justify-between w-3/4 sm:w-1/2 mx-auto my-4 p-3 rounded-xl shadow-md bg-yellow-200">
        <h3>{prop.listTitle}</h3>
        <p>{prop.done}/{prop.total}</p>
    </li>
    )
}

export default TodoList