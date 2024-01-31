import todoActionsTypes, {Todo} from "./todo.actions.types";
import { createAction } from "@reduxjs/toolkit";



const addTodoAction = createAction(todoActionsTypes.ADD_TODO, (todo): { payload: Todo } => ({ payload: todo }));
const removeTodoAction = createAction(todoActionsTypes.REMOVE_TODO, (id: number) => ({ payload: id }));
const toggleTodoAction = createAction(todoActionsTypes.TOGGLE_TODO, (id: number) => ({ payload: id }));

export { addTodoAction, removeTodoAction, toggleTodoAction };