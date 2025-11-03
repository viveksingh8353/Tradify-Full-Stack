// src/components/Indices.jsx
import { useEffect, useState } from "react";
import { fetchIndices } from "../../services/api"; // apne actual path ke hisab se

export default function Indices() {
  const [indices, setIndices] = useState([]);

  useEffect(() => {
    fetchIndices().then(setIndices);
  }, []);

  return (
    <div
      style={{
       margin: "40px 0",
        maxWidth: 800,
        marginLeft: "auto",
        marginRight: "auto",
        background: "#fff",
      }}
    >
      <h2 style={{ fontWeight: 700, margin: "0 0 1.3rem 0" }}>Indices</h2>
      <div
        style={{
          display: "flex",
          gap: "24px",
          overflowX: "auto",
          paddingBottom: "8px",
        }}
      >
        {indices.map((item, idx) => (
          <div
            key={item.name || idx}
            style={{
              minWidth: 250,
              height:130,
              fontWeight: 600,
              fontSize: 20,
              background: "#fff",
              border: "1.5px solid #efefef",
              borderRadius: 16,
              boxShadow: "0 1px 6px #0001",
              padding: "22px 12px 16px 22px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginBottom: 4,
            }}
          >
            <div style={{ fontWeight: 700, color: "#bb2222", fontSize: 19, marginBottom: 8 }}>{item.name}</div>
            <div style={{ fontWeight: 700, fontSize: 26, color: "#bb2222", marginBottom: 4 }}>
              {item.price}
            </div>
            <div style={{ fontWeight: 500, color: "#008b37", fontSize: 16 }}>
              {item.change} <span style={{color: "#008b37"}}>({item.pct_change}%)</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
