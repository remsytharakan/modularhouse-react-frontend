import { api } from "./api";

// Auth
export const register = (data) => {
    return api.post("/user/register", data);
};

export const verify = (id, data) => {
    return api.post(`/user/verify/${id}`, data);
};

export const login = (data) => {
    return api.post("/user/login", data);
};

export const forgot = (data) => {
    return api.post("/user/forgetpassword", data);
};

export const reset = (data) => {
    return api.put("/user/resetpassword", data);
};

export const logout = () => {
    return api.get("/user/logout");
};

export const getCurrentUser = () => {
    return api.get("/user/getMyProfile");
};