enum authActionsTypes{
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
    REGISTER = 'REGISTER'
}

export interface Auth{
    token?:string;
    role?:string;
}

export default authActionsTypes;