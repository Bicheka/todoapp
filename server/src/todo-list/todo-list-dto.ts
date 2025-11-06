export interface TodoListDTO {
    list_title: string;
    done: number;
    total: number;
}

export interface TodoListResponseDTO extends TodoListDTO {
    id: number
}