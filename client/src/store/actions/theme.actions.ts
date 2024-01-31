import { createAction } from "@reduxjs/toolkit";
import themeActionsTypes from "./theme.actions.types";

const toggleThemeAction = createAction(themeActionsTypes.TOGGLE_THEME); 

export {toggleThemeAction};