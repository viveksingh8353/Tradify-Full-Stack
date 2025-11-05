// src/pages/dashboard/components/TopGainers.jsx

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchTopGainers } from "../../../services/api";

export default function TopGainers() {
  const [marketCapFilter, setMarketCapFilter] = useState("large");
  const [gainers, setGainers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTopGainers(marketCapFilter).then(setGainers);
  }, [marketCapFilter]);

  const filters = ["large", "mid", "small"];

  return (
    <div style={{ maxWidth: 800, background: "#fff", margin: "40px 0" }}>

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: 0, color: "#00795a" }}>
          Top Gainers
        </h2>
        <span
          onClick={() => navigate("/topmovers")}
          style={{ cursor: "pointer", fontWeight: 600, color: "#11786c" }}
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
              fontWeight: marketCapFilter === filter ? 700 : 400,
              background: marketCapFilter === filter ? "#11786c" : "#eee",
              color: marketCapFilter === filter ? "#fff" : "#333",
              transition: "0.2s",
            }}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>

      {/* Gainers List */}
      <div style={{ display: "flex", gap: 18, overflowX: "auto", paddingBottom: 10 }}>
        {gainers.map((stock) => (
          <div
            key={stock.id || stock.name}
            style={{
              minWidth: 220,
              padding: "16px",
              background: "#fff",
              borderRadius: 12,
              border: "1px solid #eee",
              boxShadow: "0px 1px 4px #0001",
            }}
          >
            <div style={{ fontWeight: 600 }}>{stock.name}</div>
            <div style={{ fontWeight: 700, fontSize: 20, color: "#008b37" }}>
              ₹{stock.price}
            </div>
            <div style={{ fontWeight: 600, fontSize: 14, color: "#008b37" }}>
              +{stock.change} ({stock.pct_change}%)
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
