// src/pages/Watchlist/WatchlistPage.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import WatchlistHeader from "./components/WatchlistHeader";
import WatchlistTable from "./components/WatchlistTable";

const initialWatchlist = [
  { scrip: "RELIANCE", ltp: "₹2,500.00", change: "+25.35", pct: "+1.02%" },
  { scrip: "TCS", ltp: "₹3,200.00", change: "-15.10", pct: "-0.47%" },
  { scrip: "TATA STEEL", ltp: "₹120.50", change: "+5.20", pct: "+4.51%" }
];

export default function WatchlistPage() {
  const [watchlist, setWatchlist] = useState(initialWatchlist);

  const handleRemove = (scrip) => {
    setWatchlist(prev => prev.filter(item => item.scrip !== scrip));
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.2 }}
      transition={{ duration: 2 }}
    >
      <div className="max-w-5xl mx-auto py-10 px-4">
        <WatchlistHeader />
        <WatchlistTable watchlist={watchlist} onRemove={handleRemove} />
      </div>
    </motion.div>
  );
}
