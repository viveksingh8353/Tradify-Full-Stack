// src/pages/dashboard/components/TopMarketCap.jsx

import { useEffect, useState } from "react";
import { fetchMarketCap } from "../../../services/api";

export default function TopMarketCap() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetchMarketCap(14).then(setRecords);
  }, []);

  return (
    <div style={{ maxWidth: 800, margin: "40px 0", background: "#fff" }}>

      <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 18px 0" }}>
        Top by Market Cap
      </h2>

      <div
        style={{
          borderRadius: 14,
          overflow: "hidden",
          border: "1px solid #eee",
          boxShadow: "0 2px 10px #0001",
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#fafbfc", borderBottom: "1px solid #eee" }}>
              {["Company", "Price", "Market Cap (Cr.)", "52W High", "52W Low"].map((h, idx) => (
                <th
                  key={idx}
                  style={{
                    padding: "12px 10px",
                    textAlign: idx === 0 ? "left" : "center",
                    fontSize: 15,
                    fontWeight: 600,
                    color: "#555",
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {records.map((rec, idx) => (
              <tr key={idx} style={{ borderBottom: "1px solid #f5f5f5" }}>

                {/* COMPANY */}
                <td style={{ padding: "12px 10px", fontWeight: 600, color: rec.change < 0 ? "#bb2222" : "#11786c" }}>
                  {rec.company}
                </td>

                {/* PRICE + CHANGE */}
                <td style={{ padding: "12px 10px", textAlign: "center" }}>
                  <div style={{ fontWeight: 700 }}>₹{rec.price}</div>
                  <div style={{ fontSize: 13, fontWeight: 500, color: rec.change < 0 ? "#bb2222" : "#008b37" }}>
                    {rec.change > 0 && "+"}{rec.change} ({rec.pct_change}%)
                  </div>
                </td>

                {/* MARKET CAP */}
                <td style={{ padding: "12px 10px", textAlign: "center", color: "#666", fontWeight: 500 }}>
                  {rec.market_cap}
                </td>

                {/* 52W HIGH */}
                <td style={{ padding: "12px 10px", textAlign: "center", fontWeight: 600, color: "#008b37" }}>
                  ₹{rec.high_52w}
                </td>

                {/* 52W LOW */}
                <td style={{ padding: "12px 10px", textAlign: "center", fontWeight: 600, color: "#bb2222" }}>
                  ₹{rec.low_52w}
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
