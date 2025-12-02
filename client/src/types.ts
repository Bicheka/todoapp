// types.ts
export interface TodoListItem {
    id: string;
    listTitle: string;
    done: number;
    total: number;
}

export interface TodoProperties{
    id: string,
    title: string,
    description: string,
    completed: boolean,
}