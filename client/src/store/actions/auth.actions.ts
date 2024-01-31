import { createAction } from "@reduxjs/toolkit";
import authActionsTypes from "./auth.actions.types";
import IUser from "@domaine/IUser";


const loginAction=createAction(authActionsTypes.LOGIN, (user:IUser) =>( {payload:user}));
const logoutAction=createAction(authActionsTypes.LOGOUT);
const registerAction=createAction(authActionsTypes.REGISTER, (user:IUser) =>( {payload:user}));

export {loginAction, logoutAction, registerAction};