import axios from "axios";
import { ErrorToast } from "../../Components/Toast/Toast";

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        const expectedError =
            error.response &&
            error.response.status >= 400 &&
            error.response.status < 500;

        if (!expectedError) {
            ErrorToast("متأسفانه مشکلی  وجود دارد");
        }
        return Promise.reject(error);
    }
);

// will send token to headers request ( in x-auth-token body )
axios.interceptors.request.use((config) => {
    // config.headers.Authorization = "Bearer " + getItem("Authorization");
    return config;
});

export default axios;
