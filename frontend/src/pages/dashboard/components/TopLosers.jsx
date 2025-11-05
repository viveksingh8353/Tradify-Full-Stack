// src/pages/dashboard/components/TopLosers.jsx

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchTopLosers } from "../../../services/api";

export default function TopLosers() {
  const [marketCapFilter, setMarketCapFilter] = useState("large");
  const [losers, setLosers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTopLosers(marketCapFilter).then(setLosers);
  }, [marketCapFilter]);

  const filters = ["large", "mid", "small"];

  return (
    <div style={{ maxWidth: 800, background: "#fff", margin: "40px 0" }}>

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: 0, color: "#bb2222" }}>
          Top Losers
        </h2>
        <span
          onClick={() => navigate("/topmovers")}
          style={{
            cursor: "pointer",
            fontWeight: 600,
            color: "#11786c"
          }}
        >
          View More
        </span>
      </div>

      {/* Filter Buttons */}
      <div style={{ display: "flex", gap: 10, marginBottom: 14 }}>
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setMarketCapFilter(filter)}
            style={{
              padding: "6px 18px",
              borderRadius: 8,
              border: "none",
              cursor: "pointer",
              transition: "0.2s",
              fontWeight: marketCapFilter === filter ? 700 : 400,
              background: marketCapFilter === filter ? "#bb2222" : "#eee",
              color: marketCapFilter === filter ? "#fff" : "#333",
            }}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>

      {/* Losers List */}
      <div style={{ display: "flex", gap: 18, overflowX: "auto", paddingBottom: 10 }}>
        {losers.map((stock) => (
          <div
            key={stock.id || stock.name}
            style={{
              minWidth: 220,
              padding: 16,
              background: "#fff",
              borderRadius: 12,
              border: "1px solid #eee",
              boxShadow: "0px 1px 4px #0001",
            }}
          >
            <div style={{ fontWeight: 600 }}>{stock.name}</div>
            <div style={{ fontWeight: 700, fontSize: 20, color: "#bb2222" }}>
              ₹{stock.price}
            </div>
            <div style={{ fontWeight: 600, fontSize: 14, color: "#bb2222" }}>
              {stock.change} ({stock.pct_change}%)
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
