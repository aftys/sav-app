import axios, {  AxiosInstance } from "axios";
import process from "process";


const api: AxiosInstance = axios.create({
    baseURL: process.env.VITE_API_URL || "http://localhost:5000",
});
const headers = {
    "Content-Type": "application/json",
    "Autorisation": "Bearer " + localStorage.getItem("token"),
};

export { api, headers};