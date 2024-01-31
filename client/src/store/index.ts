import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todo.reducer";
import authReducer from "./reducers/auth.reducer";
import themeReducer from "./reducers/theme.reducer";

const rootReducer=combineReducers({
    tasks:todoReducer,
    theme:themeReducer,
    auth:authReducer
})

const store = configureStore({
    reducer: rootReducer,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;