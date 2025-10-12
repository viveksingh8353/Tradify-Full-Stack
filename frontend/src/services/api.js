// src/services/api.js
import axios from 'axios';

const API_URL = "http://127.0.0.1:8000";

const api = axios.create({
  baseURL: API_URL,
});

// Auth token attach kare har request me agar available ho
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Indices fetch karne ka function
export const fetchIndices = async () => {
  const res = await api.get('/indices');
  return res.data;
};

// Gainers fetch karne ka function
export const fetchTopGainers = async (size = "Large", limit = 10) => {
  const res = await api.get('/top_gainers', { params: { size, limit } });
  return res.data;
};

// Losers fetch karne ka function
export const fetchTopLosers = async (size = "Large", limit = 10) => {
  const res = await api.get('/top_losers', { params: { size, limit } });
  return res.data;
};

// Top by Market Cap fetch karne ka function
export const fetchMarketCap = async (limit = 10) => {
  const res = await api.get('/market_cap', { params: { limit } });
  return res.data;
};

// Stocks paginated (agar purana bhi use ho raha hai)
export const fetchStocks = async (limit = 20, offset = 0) => {
  const res = await api.get('/stocks', { params: { limit, offset } });
  return res.data;
};

// Aur endpoints bhi yahan add kar sakte ho
// export const fetchPortfolio = ...
// export const fetchWatchlist = ...
// etc.

export default api;
