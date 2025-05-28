import React, { useEffect, useState } from "react";
import MarketChart from "../components/charts/MarketChart";
import styles from "../styles/Dashboard.module.css";

export default function Dashboard() {
  const [marketData, setMarketData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMarketData((prevData) => {
        const timestamp = new Date().toLocaleTimeString();
        const newEntry = {
          time: timestamp,
          price: Number((Math.random() * 1000 + 20000).toFixed(2)),
          inflow: Number((Math.random() * 100).toFixed(2)),
        };
        return [...prevData.slice(-19), newEntry];
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.dashboardWrapper}>
      <h1 className={styles.header}>Market Dashboard</h1>
      <div className={styles.chartCard}>
        <MarketChart data={marketData} />
      </div>
    </div>
  );
}
