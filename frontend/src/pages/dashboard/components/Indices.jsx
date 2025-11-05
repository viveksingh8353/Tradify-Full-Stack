import { useEffect, useState } from "react";
import { fetchIndices } from "../../../services/api";

export default function Indices() {
  const [indices, setIndices] = useState([]);

  useEffect(() => {
    fetchIndices().then(setIndices);
  }, []);

  const getColor = (value) => {
    if (value > 0) return "text-green-600";
    if (value < 0) return "text-red-600";
    return "text-gray-600";
  };

  return (
    <div className="mt-6 w-full">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">
        Market Indices
      </h2>

      <div className="flex gap-5 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-gray-300">
        {indices.map((item, idx) => (
          <div
            key={idx}
            className="min-w-[240px] h-[105px] bg-white border border-gray-200 rounded-xl shadow-sm p-4 flex flex-col justify-between"
          >
            <span className="text-sm font-medium text-gray-600">
              {item.name}
            </span>

            <span className="text-xl font-semibold text-gray-900">
              {item.price ?? "--"}
            </span>

            <span className={`text-sm font-medium ${getColor(item.change)}`}>
              {item.change ?? "--"}{" "}
              <span>
                ({item.pct_change !== null && item.pct_change !== undefined ? `${item.pct_change}%` : "--"})
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
