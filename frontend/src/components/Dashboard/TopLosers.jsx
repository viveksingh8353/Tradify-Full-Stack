// src/components/TopLosers.jsx
import { useEffect, useState } from "react";
import { fetchTopLosers } from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function TopLosers() {
  const [size, setSize] = useState("large");
  const [losers, setLosers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => { fetchTopLosers(size).then(setLosers); }, [size]);

  return (
    <div style={{ margin: "40px 0",
        maxWidth: 800,
        marginLeft: "auto",
        marginRight: "auto",
        background: "#fff" }}>
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6
      }}>
        <h2 style={{ color: "#bb2222", fontSize: 22, fontWeight: 700, margin: 0 }}>Top Losers</h2>
        <span style={{ color: "#11786c", fontWeight: 600, cursor: "pointer" }} onClick={() => navigate("/topmovers")}>View More</span>
      </div>
      <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
        {["large", "mid", "small"].map(s =>
          <button key={s}
            onClick={() => setSize(s)}
            style={{
              fontWeight: size === s ? 700 : 400,
              background: size === s ? "#bb2222" : "#eee",
              color: size === s ? "#fff" : "#333",
              border: "none", borderRadius: 8, padding: "4px 16px", cursor: "pointer"
            }}>{s.charAt(0).toUpperCase() + s.slice(1)}</button>
        )}
      </div>
      <div style={{ display: "flex", gap: 18, overflowX: "auto", padding: "2px 0 12px 0" }}>
        {losers.map(st =>
          <div key={st.id} style={{
            border: "1px solid #eee", borderRadius: 12, minWidth: 220, padding: 16, background: "#fff"
          }}>
            <div style={{ fontWeight: 600 }}>{st.name}</div>
            <div style={{ color: "#bb2222", fontWeight: 600, fontSize: 20 }}>₹{st.price}</div>
            <div style={{ color: "#bb2222", fontSize: 15, fontWeight: 600 }}>{st.change} ({st.pct_change}%)</div>
          </div>
        )}
      </div>
    </div>
  );
}
