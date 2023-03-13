import axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_REACT_APP_API_BASE_URL;

export type User = {
    id?: number;
    firstName?: string;
    lastName?: string;
    email: string;
    password?: string;
};

export const signUp = async (data: User) => {
    await axios.post("/api/signup", data);
    return;
};

export const login = async (data: User) => {
    await axios.post("/api/login", data);
    return;
};

export const logout = async () => {
    await axios.delete("/api/logout");
    return;
};

export const validateJwtToken = async () => {
    const response = await axios.get("/api/tokenVerification");
    return response;
};
