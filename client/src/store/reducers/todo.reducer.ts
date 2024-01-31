import { createReducer } from "@reduxjs/toolkit";
import { addTodoAction, removeTodoAction, toggleTodoAction } from "../actions/todo.actions";
import { Todo } from "../actions/todo.actions.types";


const initialState: Todo[] = [{ id: 1, text: "Learn React", completed: false}];

const todoReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addTodoAction, (state, action) => {
            state.push({...action.payload,completed:false});
        })
        .addCase(removeTodoAction, (state, action) => {
            return state.filter((todo) => todo.id !== action.payload);
        })
        .addCase(toggleTodoAction, (state, action) => {
            return state.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            });
        });
});

export default todoReducer;
