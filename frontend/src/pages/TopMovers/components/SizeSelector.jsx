// src/pages/TopMovers/components/SizeSelector.jsx
import React from "react";

export default function SizeSelector({ size, setSize, tabColor }) {
  return (
    <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
      {["large", "mid", "small"].map(s =>
        <button key={s}
          onClick={() => setSize(s)}
          style={{
            fontWeight: size === s ? 700 : 400,
            background: size === s ? tabColor : "#eee",
            color: size === s ? "#fff" : "#333",
            border: "none", borderRadius: 8, padding: "4px 16px", cursor: "pointer"
          }}>{s.charAt(0).toUpperCase() + s.slice(1)}</button>
      )}
    </div>
  );
}
