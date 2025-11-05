
import React from "react";
import { motion } from "framer-motion";
import SummaryCards from "./components/SummaryCards";
import HoldingsTable from "./components/HoldingsTable";
import HoldingsChart from "./components/HoldingsChart";
import OrderBookTable from "./components/OrderBookTable";

export default function PortfolioPage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.2 }}
      transition={{ duration: 2 }}
    >
      <div className="max-w-7xl mx-auto p-6">
        <SummaryCards />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <HoldingsTable />
          <HoldingsChart />
          <OrderBookTable />
        </div>
      </div>
    </motion.div>
  );
}
