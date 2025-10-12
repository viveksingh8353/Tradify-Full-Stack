import React from "react";

export default function Portfolio() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-7">
        {/* Portfolio Value */}
        <div className="bg-white rounded-xl border shadow p-4 flex flex-col justify-between">
          <div className="text-2xl font-semibold text-gray-700 mb-4">
            Your Portfolio Value
          </div>
          <div>
            <div className="text-4xl font-bold text-green-700 mb-2">₹0.00</div>
            <div className="text-green-600 font-semibold text-lg">+0.00</div>
          </div>
        </div>
        {/* Stocks */}
        <div className="bg-white rounded-xl border shadow p-4 flex flex-col justify-between">
          <div className="text-2xl font-semibold text-gray-700 mb-4">Stocks</div>
          <div className="text-4xl font-bold text-green-700">0</div>
        </div>
        {/* Remaining Cash */}
        <div className="bg-white rounded-xl border shadow p-4 flex flex-col justify-between">
          <div className="text-2xl font-semibold text-gray-700 mb-4">
            Remaining Cash
          </div>
          <div className="text-4xl font-bold text-green-700">₹ 250000</div>
        </div>
      </div>

      {/* Main Panels */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Holdings */}
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
                {/* Map holdings here */}
                <tr>
                  <td colSpan={6} className="text-center text-gray-400 py-10">
                    {/* Empty state or map your rows */}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Holdings Chart */}
        <div className="bg-white rounded-xl border shadow p-4 min-h-[330px] flex flex-col items-center justify-center">
          <div className="text-3xl font-semibold text-green-700 mb-3">Holding Chart</div>
          <div className="w-full h-60 bg-gray-100 rounded flex items-center justify-center">
            {/* Insert chart here, e.g. Chart.js or Recharts */}
          </div>
        </div>

        {/* Order Book */}
        <div className="bg-white rounded-xl border shadow p-4 min-h-[330px]">
          <div className="text-3xl font-semibold text-green-700 mb-3">Order Book</div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500">
                  <th className="pb-2 pr-4">SCRIP</th>
                  <th className="pb-2 pr-4">QUANTITY</th>
                  <th className="pb-2 pr-4">PRICE</th>
                  <th className="pb-2 pr-4">TYPE</th>
                  <th className="pb-2 pr-4">DATE</th>
                </tr>
              </thead>
              <tbody>
                {/* Map orders here */}
                <tr>
                  <td colSpan={5} className="text-center text-gray-400 py-10">
                    {/* Empty state or map your rows */}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
