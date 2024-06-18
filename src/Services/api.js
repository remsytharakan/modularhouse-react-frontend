import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:4000",
});

api.interceptors.request.use(
    (config) => {
        const authToken = sessionStorage.getItem("authtoken");
        if (authToken) {
            config.headers.Authorization = `Bearer ${authToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);