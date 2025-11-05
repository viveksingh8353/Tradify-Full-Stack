import axios from "axios";

const API_URL = "http://127.0.0.1:8000";


const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error?.response?.data || error.message);
    return Promise.reject(error);
  }
);

export const fetchIndices = async () => {
  const { data } = await api.get("/indices");
  return data;
};


export const fetchTopGainers = async (size = "large", limit = 10) => {
  const { data } = await api.get("/top_gainers", { params: { size, limit } });
  return data;
};


export const fetchTopLosers = async (size = "large", limit = 10) => {
  const { data } = await api.get("/top_losers", { params: { size, limit } });
  return data;
};

export const fetchMarketCap = async (limit = 10) => {
  const { data } = await api.get("/top_market_cap", { params: { limit } });
  return data;
};

export const fetchUsername = async () => {
  const { data } = await api.get("/me");
  return data;
};

export default api;
