import { useEffect, useState } from "react";
import { fetchTopGainers, fetchTopLosers } from "../services/api";

export default function TopMoversPage() {
  const [tab, setTab] = useState("gainers");
  const [size, setSize] = useState("large");
  const [gainers, setGainers] = useState([]);
  const [losers, setLosers] = useState([]);

  useEffect(() => {
    if (tab === "gainers") fetchTopGainers(size, 100).then(setGainers);
    if (tab === "losers") fetchTopLosers(size, 100).then(setLosers);
  }, [tab, size]);

  const data = tab === "gainers" ? gainers : losers;
  const tabColor = tab === "gainers" ? "#11786c" : "#bb2222";

  return (
    <div style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 32px"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 24, margin: "2rem 0 1rem 0" }}>
        <span onClick={() => setTab("gainers")}
              style={{ cursor: "pointer", color: tab === "gainers" ? tabColor : "#333", borderBottom: tab === "gainers" ? `2.5px solid ${tabColor}` : "none", fontWeight: 700 }}>
          Gainers
        </span>
        <span onClick={() => setTab("losers")}
              style={{ cursor: "pointer", color: tab === "losers" ? tabColor : "#333", borderBottom: tab === "losers" ? `2.5px solid ${tabColor}` : "none", fontWeight: 700 }}>
          Losers
        </span>
      </div>
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
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px,1fr))", gap: 18 }}>
        {data.map(st => (
          <div key={st.id} style={{
            border: "1px solid #eee", borderRadius: 13, padding: "1rem", background: "#fff"
          }}>
            <div style={{ fontWeight: 800, fontSize: 20, color: tab === "gainers" ? "#00795a" : "#bb2222" }}>{st.name}</div>
            <div style={{ fontWeight: 700, fontSize: 22, color: tab === "gainers" ? "#008b37" : "#bb2222" }}>₹{st.price} {st.change > 0 ? "+" : ""}{st.change} ({st.pct_change}%)</div>
            {/* Aur bhi detail like opening, closing etc. add kar sakte ho */}
            <div style={{ marginTop: 8, fontSize: 14, color: "#555" }}>Sample Details/Text</div>
          </div>
        ))}
      </div>
    </div>
  );
}
