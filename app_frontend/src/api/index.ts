import axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL

export type User = {
    id?: number;
    firstName?: string;
    lastName?: string;
    mail: string;
    password?: string;
};

export const signUp = async (data: User) => {
    await axios.post("/signup", data);
    return;
};

export const login = async (data: User) => {
    await axios.post("/login", data);
    return;
};

export const logout = async () => {
    await axios.delete("/logout");
    return;
};

export const validateJwtToken = async () => {
    const response = axios.get("/tokenVerification");
    return response;
};
