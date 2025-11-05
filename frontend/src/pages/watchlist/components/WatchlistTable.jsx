// src/pages/Watchlist/components/WatchlistTable.jsx
import React from "react";

export default function WatchlistTable({ watchlist, onRemove }) {
  return (
    <div className="bg-white shadow rounded-xl overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="text-left text-gray-500 border-b">
            <th className="px-4 py-3">Scrip</th>
            <th className="px-4 py-3">LTP</th>
            <th className="px-4 py-3">Change</th>
            <th className="px-4 py-3">% Change</th>
            <th className="px-4 py-3">Remove</th>
          </tr>
        </thead>
        <tbody>
          {watchlist.map((item) => (
            <tr key={item.scrip} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2 font-medium text-teal-900">{item.scrip}</td>
              <td className="px-4 py-2">{item.ltp}</td>
              <td className={`px-4 py-2 font-semibold ${item.change.startsWith("-") ? "text-red-600" : "text-green-700"}`}>{item.change}</td>
              <td className={`px-4 py-2 font-semibold ${item.pct.startsWith("-") ? "text-red-600" : "text-green-700"}`}>{item.pct}</td>
              <td className="px-4 py-2">
                <button
                  className="text-red-500 hover:text-red-700 font-extrabold"
                  title="Remove"
                  onClick={() => onRemove(item.scrip)}
                >×</button>
              </td>
            </tr>
          ))}
          {watchlist.length === 0 && (
            <tr>
              <td colSpan={5} className="text-center text-gray-400 py-10">
                No stocks in your watchlist.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
