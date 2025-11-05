// src/pages/TopMovers/components/TabSwitcher.jsx
import React from "react";

export default function TabSwitcher({ tab, setTab, tabColor }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 24, margin: "2rem 0 1rem 0" }}>
      <span onClick={() => setTab("gainers")}
        style={{
          cursor: "pointer",
          color: tab === "gainers" ? tabColor : "#333",
          borderBottom: tab === "gainers" ? `2.5px solid ${tabColor}` : "none",
          fontWeight: 700
        }}>
        Gainers
      </span>
      <span onClick={() => setTab("losers")}
        style={{
          cursor: "pointer",
          color: tab === "losers" ? tabColor : "#333",
          borderBottom: tab === "losers" ? `2.5px solid ${tabColor}` : "none",
          fontWeight: 700
        }}>
        Losers
      </span>
    </div>
  );
}
