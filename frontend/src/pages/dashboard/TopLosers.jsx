import React from "react";
export default function TopLosers({ losers, loading }) {
  return (
    <div>
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
