// src/pages/TopMovers/TopMoversPage.jsx
import React, { useEffect, useState } from "react";
import { fetchTopGainers, fetchTopLosers } from "../../services/api";
import { motion } from "framer-motion";
import TabSwitcher from "./components/TabSwitcher";
import SizeSelector from "./components/SizeSelector";
import MoversList from "./components/MoversList";

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
    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.2 }} transition={{ duration: 2 }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
        <TabSwitcher tab={tab} setTab={setTab} tabColor={tabColor} />
        <SizeSelector size={size} setSize={setSize} tabColor={tabColor} />
        <MoversList data={data} tab={tab} tabColor={tabColor} />
      </div>
    </motion.div>
  );
}
