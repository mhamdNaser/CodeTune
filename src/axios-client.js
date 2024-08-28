import axios from "axios";
import Cookies from "js-cookie";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

axiosClient.interceptors.request.use((config) => {
  const token = Cookies.get("ACCESS_TOKEN");
  const language = localStorage.getItem("LANGUAGE") || "en";

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  config.headers["X-Language"] = language;

  return config;
});

export const fetchTranslations = async (language) => {
  try {
    const response = await axiosClient.get(`/locale/${language}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching translations:", error);
    return {};
  }
};

export const requestHandler = async (method, url, data = null) => {
  try {
    const response = await axiosClient({
      method,
      url,
      data,
    });
    return response;
  } catch (error) {
    console.error(`Error in ${method} request to ${url}:`, error);
    throw error;
  }
};


export default axiosClient;
