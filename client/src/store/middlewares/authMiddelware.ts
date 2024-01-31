/* eslint-disable @typescript-eslint/no-explicit-any */
import { isRejectedWithValue, Middleware } from '@reduxjs/toolkit';
import { logoutAction } from '@store/actions/auth.actions';

const authMiddleWare: Middleware = ({ dispatch }) =>
    (next) =>
        async (action: any) => {
            if (isRejectedWithValue(action) && action.payload.status === 401) {
                dispatch(logoutAction());
            }
            return next(action);
        };
export default authMiddleWare;