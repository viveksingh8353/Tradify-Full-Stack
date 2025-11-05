
import React from "react";

export default function SummaryCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-7">
     
      <div className="bg-white rounded-xl border shadow p-4 flex flex-col justify-between">
        <div className="text-2xl font-semibold text-gray-700 mb-4">Your Portfolio Value</div>
        <div>
          <div className="text-4xl font-bold text-green-700 mb-2">₹0.00</div>
          <div className="text-green-600 font-semibold text-lg">+0.00</div>
        </div>
      </div>
     
      <div className="bg-white rounded-xl border shadow p-4 flex flex-col justify-between">
        <div className="text-2xl font-semibold text-gray-700 mb-4">Stocks</div>
        <div className="text-4xl font-bold text-green-700">0</div>
      </div>
    
      <div className="bg-white rounded-xl border shadow p-4 flex flex-col justify-between">
        <div className="text-2xl font-semibold text-gray-700 mb-4">Remaining Cash</div>
        <div className="text-4xl font-bold text-green-700">₹ 250000</div>
      </div>
    </div>
  );
}
