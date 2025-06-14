import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import Cookies from "js-cookie";

const baseURL = process.env.NEXT_PUBLIC_BE_BASE_URL;

export const api = axios.create({
  baseURL,
});

api.interceptors.request.use(
  (config) => {
    const token = "12345";
    if (token && config.headers) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
api.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  async (error: AxiosError) => {
    const status = error.response?.status;

    if (status === 498) {
      const refresh_token = Cookies.get("1234");
      if (refresh_token) {
        try {
          //   await validateRefreshToken({ refresh_token });
        } catch (refreshError) {
          console.error("Token refresh failed", refreshError);
        }
      }
    } else if (status === 500) {
      console.error("Internal Server Error");
    }

    return Promise.reject(error);
  }
);

export default api;
