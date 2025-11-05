// src/pages/TopMovers/components/MoversList.jsx
import React from "react";

export default function MoversList({ data, tab, tabColor }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px,1fr))", gap: 18 }}>
      {data.length === 0 ? (
        <div style={{
          gridColumn: "1/-1",
          textAlign: "center",
          color: "#bbb",
          padding: "40px 0",
          fontSize: 18
        }}>
          Loading or No data found.
        </div>
      ) : (
        data.map(st => (
          <div key={st.id} style={{
            border: "1px solid #eee", borderRadius: 13, padding: "1rem", background: "#fff"
          }}>
            <div style={{ fontWeight: 800, fontSize: 20, color: tab === "gainers" ? "#00795a" : "#bb2222" }}>{st.name}</div>
            <div style={{ fontWeight: 700, fontSize: 22, color: tab === "gainers" ? "#008b37" : "#bb2222" }}>
              ₹{st.price} {st.change > 0 ? "+" : ""}{st.change} ({st.pct_change}%)
            </div>
            <div style={{ marginTop: 8, fontSize: 14, color: "#555" }}>Sample Details/Text</div>
          </div>
        ))
      )}
    </div>
  );
}
