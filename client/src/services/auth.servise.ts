import IUser from "src/domaine/IUser";
import {api ,headers} from "./api";
import IRegister from "src/domaine/IRegister";


async function login(email: string, password: string): Promise<IUser> {

    const response: IUser = await api.post("/login", {
        headers,
        body: {email, password},
    });

    return  response;
}

async function register(user: IRegister): Promise<IUser> {
    const response: IUser = await api.post("/register", {
        headers,
        body: user,
    });

    return response;
}


async function verify(): Promise<boolean> {
    const response:boolean = await api.post("/verify", {
        headers,
    });
    return response;
}

export  { login, register, verify };