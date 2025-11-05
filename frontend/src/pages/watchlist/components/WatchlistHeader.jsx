// src/pages/Watchlist/components/WatchlistHeader.jsx
import React from "react";

export default function WatchlistHeader() {
  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-3xl font-bold text-teal-700">My Watchlist</h1>
      <button className="bg-green-600 text-white px-4 py-2 rounded-md font-semibold shadow hover:bg-green-700 transition">
        + Add to Watchlist
      </button>
    </div>
  );
}
