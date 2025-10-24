import React from "react";
export default function TopGainers({ gainers, loading }) {
  return (
    <div>
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
    </div>
  );
}
