import React, { useState } from "react";

const TOP_GAINERS = [
  { scrip: "DIVISLAB", ltp: "₹4,870.10", change: "+182.35", pct: "+3.89%" },
  { scrip: "CIPLA", ltp: "₹1,310.20", change: "+53.00", pct: "+4.21%" },
  { scrip: "PNB", ltp: "₹110.35", change: "+4.20", pct: "+3.96%" },
];

const TOP_LOSERS = [
  { scrip: "RELIANCE", ltp: "₹2,500.00", change: "-30.25", pct: "-1.20%" },
  { scrip: "TCS", ltp: "₹3,200.50", change: "-47.50", pct: "-1.46%" },
  { scrip: "ICICIBANK", ltp: "₹1,038.90", change: "-19.20", pct: "-1.81%" },
];

export default function TopMovers() {
  const [tab, setTab] = useState("Gainers");
  const movers = tab === "Gainers" ? TOP_GAINERS : TOP_LOSERS;

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <div className="flex items-center justify-between mb-7">
        <h1 className="text-3xl font-bold text-teal-700">Top Movers</h1>
        <div className="flex space-x-2">
          <button
            onClick={() => setTab("Gainers")}
            className={`px-4 py-2 rounded font-semibold transition ${tab === "Gainers" ? "bg-green-600 text-white" : "bg-green-100 text-green-700"}`}
          >
            Gainers
          </button>
          <button
            onClick={() => setTab("Losers")}
            className={`px-4 py-2 rounded font-semibold transition ${tab === "Losers" ? "bg-red-600 text-white" : "bg-red-100 text-red-700"}`}
          >
            Losers
          </button>
        </div>
      </div>
      <div className="bg-white shadow rounded-xl overflow-x-auto">
        <table className="min-w-full text-base">
          <thead>
            <tr className="text-left text-gray-500 border-b">
              <th className="px-4 py-3">Scrip</th>
              <th className="px-4 py-3">LTP</th>
              <th className="px-4 py-3">Change</th>
              <th className="px-4 py-3">% Change</th>
            </tr>
          </thead>
          <tbody>
            {movers.map((item) => (
              <tr key={item.scrip} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-teal-900">{item.scrip}</td>
                <td className="px-4 py-3">{item.ltp}</td>
                <td className={`px-4 py-3 font-semibold ${item.change.startsWith("-") ? "text-red-600" : "text-green-700"}`}>{item.change}</td>
                <td className={`px-4 py-3 font-semibold ${item.pct.startsWith("-") ? "text-red-600" : "text-green-700"}`}>{item.pct}</td>
              </tr>
            ))}
            {movers.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center text-gray-400 py-10">No data available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
