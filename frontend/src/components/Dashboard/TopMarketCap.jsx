// src/components/TopMarketCap.jsx
import { useEffect, useState } from "react";
import { fetchMarketCap } from "../../services/api";

export default function TopMarketCap() {
  const [records, setRecords] = useState([]);
  useEffect(() => { fetchMarketCap(14).then(setRecords); }, []);

  return (
    <div
      style={{
        margin: "40px 0",
        maxWidth: 800,
        marginLeft: "auto",
        marginRight: "auto",
        background: "#fff"
      }}
    >
      <h2 style={{ fontWeight: 700, fontSize: 24, marginBottom: 20 }}>Top By Market Cap</h2>
      <div
        style={{
          borderRadius: 14,
          boxShadow: "0 2px 12px 1px #0001",
          border: "1px solid #efefef",
          overflow: "hidden"
        }}
      >
        <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: 0 }}>
          <thead>
            <tr style={{ background: "#fafbfc" }}>
              <th style={{ textAlign: "left", padding: "12px 10px", fontSize: 16, color: "#444" }}>
                COMPANY
              </th>
              <th style={{ padding: "12px 6px", fontSize: 16, color: "#444" }}>
                PRICE
              </th>
              <th style={{ padding: "12px 6px", fontSize: 16, color: "#444" }}>
                MARKET CAP (Cr.)
              </th>
              <th style={{ padding: "12px 6px", fontSize: 16, color: "#444" }}>
                52W HIGH
              </th>
              <th style={{ padding: "12px 10px", fontSize: 16, color: "#444" }}>
                52W LOW
              </th>
            </tr>
          </thead>
          <tbody>
            {records.map((rec, idx) => (
              <tr key={idx}
                style={{
                  borderBottom: "1px solid #f5f5f5",
                  fontSize: 17,
                  fontWeight: 500
                }}
              >
                <td style={{
                  padding: "10px",
                  color: rec.change < 0 ? "#bb2222" : "#11786c",
                  fontWeight: 700
                }}>
                  {rec.company}
                </td>
                <td style={{ padding: "10px", textAlign: "center" }}>
                  <span style={{ fontWeight: 700 }}>₹{rec.price}</span>
                  <br />
                  <span style={{ color: rec.change < 0 ? "#bb2222" : "#008b37", fontSize: 13 }}>
                    {rec.change > 0 && "+"}{rec.change} ({rec.pct_change}%)
                  </span>
                </td>
                <td style={{ padding: "10px", textAlign: "center", color: "#767676", fontWeight: 500 }}>
                  {rec.market_cap}
                </td>
                <td style={{ padding: "10px", textAlign: "center", fontWeight: 600, color: "#008b37" }}>
                  ₹{rec.high_52w}
                </td>
                <td style={{ padding: "10px", textAlign: "center", fontWeight: 600, color: "#bb2222" }}>
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
