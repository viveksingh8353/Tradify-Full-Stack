
import React from "react";

export default function HoldingsTable() {
  return (
    <div className="bg-white rounded-xl border shadow p-4 min-h-[330px]">
      <div className="text-3xl font-semibold text-green-700 mb-3">Holdings</div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500">
              <th className="pb-2 pr-4">SCRIP</th>
              <th className="pb-2 pr-4">QUANTITY</th>
              <th className="pb-2 pr-4">BUY</th>
              <th className="pb-2 pr-4">LTP</th>
              <th className="pb-2 pr-4">P/L</th>
              <th className="pb-2 pr-4">EPS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={6} className="text-center text-gray-400 py-10">
                {/* Empty state or map your rows */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
