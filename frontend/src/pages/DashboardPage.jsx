import { useState, useEffect } from "react";
import { fetchUsername } from "../services/api";
import Indices from "../components/Indices";
import TopGainers from "../components/TopGainers";
import TopLosers from "../components/TopLosers";
import TopMarketCap from "../components/TopMarketCap";
// import Breadcrumb from "../components/Breadcrumb"; // Optional

export default function DashboardPage() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    fetchUsername().then(res => setUsername(res.username));
  }, []);

  return (
    <div style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 32px"
    }}>
      {/* <Breadcrumb /> */}
      <h2 style={{ margin: "10px auto",
        maxWidth: 900,
        marginLeft: "auto",
        marginRight: "auto",
        background: "#fff" }}
    >
        Welcome back, <span style={{ color: "#11786c", fontWeight: 600 }}>{username || "User"}!</span>
      </h2>
      <Indices />
      <TopGainers />
      <TopLosers />
      <TopMarketCap />
    </div>
  );
}
