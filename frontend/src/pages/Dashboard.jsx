// src/pages/Dashboard.jsx

import React, { useEffect, useState } from "react";
import {
  fetchIndices,
  fetchTopGainers,
  fetchTopLosers
} from "../services/api";

export default function Dashboard() {
  const [tab, setTab] = useState("Large");
  const [indices, setIndices] = useState([]);
  const [gainers, setGainers] = useState([]);
  const [losers, setLosers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Load indices one time
  useEffect(() => {
    fetchIndices().then(setIndices);
  }, []);

  // Load gainers/losers on tab change
  useEffect(() => {
    setLoading(true);
    Promise.all([
      fetchTopGainers(tab),
      fetchTopLosers(tab)
    ])
      .then(([g, l]) => {
        setGainers(g);
        setLosers(l);
      })
      .finally(() => setLoading(false));
  }, [tab]);

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Indices */}
      <h1 className="text-2xl font-bold text-black mb-2">Indices</h1>
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {indices.map(idx => (
          <div
            key={idx.scrip}
            className="min-w-[180px] rounded-lg border bg-white shadow p-4 flex flex-col items-center"
          >
            <div className="font-medium text-red-600">{idx.scrip}</div>
            <div className="font-bold text-2xl">{idx.price}</div>
            <div className="text-red-500 text-sm">{idx.change} ({idx.pct_change}%)</div>
          </div>
        ))}
      </div>

      {/* Tabs for Large, Mid, Small */}
      <div className="flex gap-2 mb-4">
        {["Large", "Mid", "Small"].map(size => (
          <button
            key={size}
            onClick={() => setTab(size)}
            className={
              "px-3 py-1 rounded font-medium border " +
              (tab === size
                ? "bg-teal-600 text-white border-teal-700"
                : "bg-gray-200 text-teal-700 border-gray-300")
            }
          >
            {size}
          </button>
        ))}
      </div>

      {/* Top Gainers */}
      <div className="flex items-center mb-2">
        <h2 className="text-xl font-bold text-teal-700 mr-2">Top Gainers</h2>
        <span className="ml-auto text-teal-700 cursor-pointer">View More</span>
      </div>
      <div className="flex overflow-x-auto space-x-4 pb-2">
        {loading ? (
          <div>Loading...</div>
        ) : (
          gainers.map(g => (
            <div
              key={g.scrip}
              className="min-w-[220px] rounded-lg shadow p-4 bg-green-50 flex flex-col"
            >
              <div className="font-semibold text-lg truncate">{g.scrip}</div>
              <div className="text-teal-700 font-bold">₹{g.price}</div>
              <div className="text-green-600">
                {g.change} ({g.pct_change}%)
              </div>
            </div>
          ))
        )}
      </div>

      {/* Top Losers */}
      <div className="flex items-center mb-2 mt-6">
        <h2 className="text-xl font-bold text-red-700 mr-2">Top Losers</h2>
        <span className="ml-auto text-teal-700 cursor-pointer">View More</span>
      </div>
      <div className="flex overflow-x-auto space-x-4 pb-2">
        {loading ? (
          <div>Loading...</div>
        ) : (
          losers.map(l => (
            <div
              key={l.scrip}
              className="min-w-[220px] rounded-lg shadow p-4 bg-red-50 flex flex-col"
            >
              <div className="font-semibold text-lg truncate">{l.scrip}</div>
              <div className="text-red-700 font-bold">₹{l.price}</div>
              <div className="text-red-600">
                {l.change} ({l.pct_change}%)
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
