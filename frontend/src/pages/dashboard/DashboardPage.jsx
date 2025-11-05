import { useState, useEffect } from "react";
import { fetchUsername } from "../../services/api";
import Indices from "./components/Indices";
import TopGainers from "./components/TopGainers";
import TopLosers from "./components/TopLosers";
import TopMarketCap from "./components/TopMarketCap";
import { motion } from "framer-motion";

export default function DashboardPage() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    fetchUsername().then(res => {
      setUsername(res.username || res.name || res.user || "User");
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "0 32px"
      }}>
        
        <h1 style={{
          marginTop: 6,
          marginBottom: 18,
          fontSize: 22,
          fontWeight: 600,
          color: "#222"
        }}>
          Welcome back,{" "}
          <span style={{ color: "#11786c", fontWeight: 700 }}>
            {username}
          </span>
          👋
        </h1>

        <Indices />
        <TopGainers />
        <TopLosers />
        <TopMarketCap />
      </div>
    </motion.div>
  );
}
