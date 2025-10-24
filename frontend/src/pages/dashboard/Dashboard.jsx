// src/pages/Dashboard/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { fetchIndices, fetchTopGainers, fetchTopLosers } from "../../services/api";
import Indices from "./Indices";
import TopGainers from "./TopGainers";
import TopLosers from "./TopLosers";

export default function Dashboard() {
  const [tab, setTab] = useState("Large");
  const [indices, setIndices] = useState([]);
  const [gainers, setGainers] = useState([]);
  const [losers, setLosers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => { fetchIndices().then(setIndices); }, []);
  useEffect(() => {
    setLoading(true);
    Promise.all([fetchTopGainers(tab), fetchTopLosers(tab)])
      .then(([g, l]) => { setGainers(g); setLosers(l); })
      .finally(() => setLoading(false));
  }, [tab]);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <Indices indices={indices} />
      <div className="flex gap-2 mb-4">
        {["Large", "Mid", "Small"].map(size => (
          <button
            key={size}
            onClick={() => setTab(size)}
            className={
              "px-3 py-1 rounded font-medium border " +
              (tab === size
                ? "bg-teal-600 text-white border-teal-700"
                : "bg-gray-200 text-teal-700 border-gray-300")
            }
          >
            {size}
          </button>
        ))}
      </div>
      <TopGainers loading={loading} gainers={gainers} />
      <TopLosers loading={loading} losers={losers} />
    </div>
  );
}
