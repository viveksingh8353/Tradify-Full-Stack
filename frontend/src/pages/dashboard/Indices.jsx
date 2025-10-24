import React from "react";
export default function Indices({ indices }) {
  return (
    <div>
      <h1 className="text-2xl font-bold text-black mb-2">Indices</h1>
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {indices.map(idx => (
          <div
            key={idx.scrip}
            className="min-w-[180px] rounded-lg border bg-white shadow p-4 flex flex-col items-center"
          >
            <div className="font-medium text-red-600">{idx.scrip}</div>
            <div className="font-bold text-2xl">{idx.price}</div>
            <div className="text-red-500 text-sm">
              {idx.change} ({idx.pct_change}%)
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
