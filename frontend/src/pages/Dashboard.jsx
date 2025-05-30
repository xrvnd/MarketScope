import React, { useEffect, useState } from "react";
import MarketChart from "../components/charts/MarketChart";
import styles from "../styles/Dashboard.module.css";
import Navbar from "../components/layout/Navbar.jsx";
import axios from "axios";

export default function Dashboard() {
  const [marketData, setMarketData] = useState([]);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const res = await axios.get(
          "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart",
          {
            params: {
              vs_currency: "usd",
              days: 1,
              interval: "minutely",
            },
          }
        );
  
        const prices = res.data.prices;
        const inflows = res.data.total_volumes;
  
        const formatted = prices.map((pricePoint, index) => {
          const inflow = inflows[index]?.[1] ?? 0;
          const prevInflow = inflows[index - 1]?.[1] ?? inflow;
          const volumeChange =
            index > 0
              ? (((inflow - prevInflow) / prevInflow) * 100).toFixed(2)
              : 0;
  
          return {
            time: new Date(pricePoint[0]).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
            price: pricePoint[1],
            inflow,
            volumeChange: parseFloat(volumeChange),
          };
        });     // #TODO : here --> cleanup fetch fn
  
        setMarketData(formatted);
      } catch (err) {
        console.error("Error fetching market data:", err);
      }
    };
  
    fetchMarketData(); // initial fetch
    const interval = setInterval(fetchMarketData, 10000); // fetch every 10 seconds
  
    return () => clearInterval(interval); // cleanup after unmount
  }, []);
  
console.log(`market data : ${marketData}`)
  return (
    <>
      <Navbar />
      <div className={styles.dashboardWrapper}>
        <h1 className={styles.header}>Market Dashboard</h1>
        <div className={styles.chartCard}>
          <MarketChart data={marketData} />
        </div>
      </div>
    </>
  );
}
