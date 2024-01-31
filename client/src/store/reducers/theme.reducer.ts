import { toggleThemeAction } from "@store/actions/theme.actions";
import { createReducer } from "@reduxjs/toolkit";

const initialState = 'light';

const themeReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(toggleThemeAction, (state: string) => {
            return state == 'light' ? 'dark' : 'light';
        });
}
);

export default themeReducer;