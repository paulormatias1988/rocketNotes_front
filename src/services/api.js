import axios from "axios";

export const api = axios.create({
    baseURL: "https://rocketnotes-api-2fcv.onrender.com"
    //baseURL: "http://localhost:3333"
});