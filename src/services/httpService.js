import axios from "axios";
import { clientConfig } from "@/config/clientConfig";
import { tokenService } from "./tokenService";
const createHttpClient = (baseURL) => {
    const instance = axios.create({
        baseURL,
        timeout: 10000,
        headers: {
            "Content-Type": "application/json",
        },
    });
    instance.interceptors.request.use(
        (config) => {
            const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            if (config.data instanceof FormData) {
                delete config.headers["Content-Type"];
            }
            return config;
        },
        (error) => Promise.reject(error)
    );
    instance.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response?.status === 401) {
                try {
                    if (typeof window !== "undefined") {
                        localStorage.removeItem("token");
                        localStorage.removeItem("user");
                        try {
                            tokenService.removeToken();
                        } catch (e) {}
                        try {
                            window.dispatchEvent(new Event("auth:logout"));
                        } catch (e) {}
                        window.location.replace("/login");
                    }
                } catch (e) {
                    console.error("Error during logout after 401:", e);
                }
            }
            return Promise.reject(error);
        }
    );
    return instance;
};
export const eKasirService = createHttpClient(clientConfig.eKasirUrl || "");
export const aldebaranService = createHttpClient(clientConfig.aldebaranUrl || "");
export const httpService = {
    get: (instance, url, config) =>
        instance.get(url, config).then((res) => res.data),
    post: (instance, url, data, config) =>
        instance.post(url, data, config).then((res) => res.data),
    put: (instance, url, data, config) =>
        instance.put(url, data, config).then((res) => res.data),
    delete: (instance, url, config) =>
        instance.delete(url, config).then((res) => res.data),
};
