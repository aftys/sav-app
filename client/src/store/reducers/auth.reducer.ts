import { createReducer } from "@reduxjs/toolkit";
import { loginAction, logoutAction, registerAction } from "../actions/auth.actions";
import IUser from "@domaine/IUser";

const initialState: IUser | object = {};

const authReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(loginAction, (_state, action) => {
            return action.payload;
        })
        .addCase(logoutAction, () => {
            return {};
        })
        .addCase(registerAction, (_state, action) => {
            return action.payload;
        });
    }       
);

export default authReducer;