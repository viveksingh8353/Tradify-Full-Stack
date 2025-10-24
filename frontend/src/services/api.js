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

// ---- REALTIME STOCK DATA ----
export const fetchRealtimeStock = async (symbol) => {
  // symbol example: "TATAMOTORS.BSE" or "AAPL"
  const res = await api.get(`/realtime_stock/${symbol}`);
  return res.data;
};

// ---- DUMMY/DB DATA (old) ----
export const fetchIndices = async () => {
  const res = await api.get('/indices');
  return res.data;
};

export const fetchTopGainers = async (size = "Large", limit = 10) => {
  const res = await api.get('/top_gainers', { params: { size, limit } });
  return res.data;
};

export const fetchTopLosers = async (size = "Large", limit = 10) => {
  const res = await api.get('/top_losers', { params: { size, limit } });
  return res.data;
};

// export const fetchMarketCap = async (limit = 10) => {
//   const res = await api.get('/market_cap', { params: { limit } });
//   return res.data;
// };

export default api;
