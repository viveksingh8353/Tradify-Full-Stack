import React from "react";

const watchlist = [
  {
    scrip: "RELIANCE",
    ltp: "₹2,500.00",
    change: "+25.35",
    pct: "+1.02%",
  },
  {
    scrip: "TCS",
    ltp: "₹3,200.00",
    change: "-15.10",
    pct: "-0.47%",
  },
  {
    scrip: "TATA STEEL",
    ltp: "₹120.50",
    change: "+5.20",
    pct: "+4.51%",
  },
];

export default function Watchlist() {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-teal-700">My Watchlist</h1>
        <button className="bg-green-600 text-white px-4 py-2 rounded-md font-semibold shadow hover:bg-green-700 transition">
          + Add to Watchlist
        </button>
      </div>
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
            {watchlist.map((item, idx) => (
              <tr key={item.scrip} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2 font-medium text-teal-900">{item.scrip}</td>
                <td className="px-4 py-2">{item.ltp}</td>
                <td className={`px-4 py-2 font-semibold ${item.change.startsWith("-") ? "text-red-600" : "text-green-700"}`}>{item.change}</td>
                <td className={`px-4 py-2 font-semibold ${item.pct.startsWith("-") ? "text-red-600" : "text-green-700"}`}>{item.pct}</td>
                <td className="px-4 py-2">
                  <button className="text-red-500 hover:text-red-700 font-extrabold" title="Remove">×</button>
                </td>
              </tr>
            ))}
            {watchlist.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center text-gray-400 py-10">No stocks in your watchlist.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
