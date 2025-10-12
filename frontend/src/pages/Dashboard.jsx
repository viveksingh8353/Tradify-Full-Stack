// src/pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { fetchStocks } from "../services/api";  // apke api.js ka function

export default function Dashboard() {
  const [stocks, setStocks] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 20;  // ek baar me 20 items

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getStocks = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchStocks(limit, offset);
        setStocks(data);
      } catch (err) {
        setError("Failed to load stock data.");
      } finally {
        setLoading(false);
      }
    };
    getStocks();
  }, [offset]);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-teal-700 mb-6">Dashboard Stocks</h1>

      {error && <div className="text-red-600 mb-4">{error}</div>}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <table className="min-w-full border rounded shadow text-left">
          <thead className="bg-teal-100">
            <tr>
              <th className="p-2">Scrip</th>
              <th className="p-2">Price</th>
              <th className="p-2">Change</th>
              <th className="p-2">% Change</th>
              <th className="p-2">Market Cap</th>
              <th className="p-2">52W High</th>
              <th className="p-2">52W Low</th>
            </tr>
          </thead>
          <tbody>
            {stocks.length === 0 ? (
              <tr><td colSpan="7" className="text-center p-4">No data to display.</td></tr>
            ) : (
              stocks.map(stock => (
                <tr key={stock.id} className="hover:bg-teal-50">
                  <td className="p-2">{stock.scrip}</td>
                  <td className="p-2">{stock.price}</td>
                  <td className={`p-2 ${stock.change < 0 ? "text-red-600" : "text-green-700"}`}>
                    {stock.change}
                  </td>
                  <td className={`p-2 ${stock.pct_change < 0 ? "text-red-600" : "text-green-700"}`}>
                    {stock.pct_change}%
                  </td>
                  <td className="p-2">{stock.market_cap}</td>
                  <td className="p-2">{stock.high_52w}</td>
                  <td className="p-2">{stock.low_52w}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}

      <div className="mt-4 flex gap-4">
        <button
          disabled={offset === 0 || loading}
          className="px-4 py-2 bg-teal-600 text-white rounded disabled:opacity-50"
          onClick={() => setOffset(prev => Math.max(prev - limit, 0))}
        >
          Previous
        </button>
        <button
          disabled={loading}
          className="px-4 py-2 bg-teal-600 text-white rounded disabled:opacity-50"
          onClick={() => setOffset(prev => prev + limit)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
