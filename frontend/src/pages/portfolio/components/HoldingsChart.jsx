
import React from "react";

export default function HoldingsChart() {
  return (
    <div className="bg-white rounded-xl border shadow p-4 min-h-[330px] flex flex-col items-center justify-center">
      <div className="text-3xl font-semibold text-green-700 mb-3">Holding Chart</div>
      <div className="w-full h-60 bg-gray-100 rounded flex items-center justify-center">
        {/* Insert chart here, e.g. Chart.js or Recharts */}
      </div>
    </div>
  );
}
