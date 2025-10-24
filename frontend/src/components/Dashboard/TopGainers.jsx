import React, { useState } from 'react';

const FILTERS = ["Large", "Mid", "Small"];

const TopGainers = ({ data }) => {
  const [filter, setFilter] = useState("Large");

  // Filter by size, if data has 'size' field
  const filtered = data.filter(item => item.size === filter || !item.size);

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold text-green-800">Top Gainers</h2>
        <button className="text-green-800 font-semibold">View More</button>
      </div>
      <div className="mb-2 flex gap-2">
        {FILTERS.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 rounded ${filter === f ? "bg-green-800 text-white" : "bg-gray-200"}`}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {filtered.map(stock => (
          <div key={stock.id} className="p-4 rounded-lg shadow min-w-[220px] bg-white">
            <div className="font-bold">{stock.scrip}</div>
            <div className="text-lg font-semibold text-green-800">₹{stock.price}</div>
            <div className="text-sm text-green-700">{stock.change} ({stock.pct_change}%)</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopGainers;
