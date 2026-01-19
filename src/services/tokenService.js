import Cookies from "js-cookie";
export const tokenService = {
    setToken(token) {
        if (typeof window !== "undefined") {
            localStorage.setItem("token", token);
        }
        Cookies.set("token", token, {
            expires: 7, 
            sameSite: "lax",
            secure: import.meta.env.MODE === "production",
        });
    },
    getToken() {
        if (typeof window !== "undefined") {
            const localToken = localStorage.getItem("token");
            if (localToken) return localToken;
        }
        return Cookies.get("token") || null;
    },
    removeToken() {
        if (typeof window !== "undefined") {
            localStorage.removeItem("token");
        }
        Cookies.remove("token");
    }
};
