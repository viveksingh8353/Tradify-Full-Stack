// src/components/StocksTable.jsx
import React, { useEffect, useState } from "react";
import { fetchStocks } from "../services/api";

export default function StocksTable() {
  const [stocks, setStocks] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 20;

  useEffect(() => {
    fetchStocks(limit, offset).then(setStocks);
  }, [offset]);

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Table UI */}
      <table className="min-w-full bg-white border shadow rounded">
        <thead>
          <tr>
            <th>Scrip</th>
            <th>Price</th>
            <th>Change</th>
            <th>% Change</th>
            <th>Market Cap</th>
            <th>52W High</th>
            <th>52W Low</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((s) => (
            <tr key={s.id}>
              <td>{s.scrip}</td>
              <td>{s.price}</td>
              <td>{s.change}</td>
              <td>{s.pct_change}</td>
              <td>{s.market_cap}</td>
              <td>{s.high_52w}</td>
              <td>{s.low_52w}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination Controls */}
      <div style={{ marginTop: 16 }}>
        <button disabled={offset === 0} onClick={() => setOffset(offset - limit)}>Prev</button>
        <button onClick={() => setOffset(offset + limit)}>Next</button>
      </div>
    </div>
  );
}
