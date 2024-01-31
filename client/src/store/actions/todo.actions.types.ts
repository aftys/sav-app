enum todoActionsTypes {
    ADD_TODO = 'ADD_TODO',
    REMOVE_TODO = 'REMOVE_TODO',
    TOGGLE_TODO = 'TOGGLE_TODO',
}

export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export default todoActionsTypes;
