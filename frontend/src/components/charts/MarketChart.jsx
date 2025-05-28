import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function MarketChart({ data }) {
  const labels = data.map((item) => item.name ?? item.time ?? "N/A");
  const prices = data.map((item) => item.price ?? null);
  const inflows = data.map((item) => item.inflow ?? null); // optional

  const chartData = {
    labels,
    datasets: [
      {
        label: "Crypto Prices (USD)",
        data: prices,
        borderColor: "rgba(75, 192, 192, 1)",
        fill: false,
        tension: 0.2,
      },
      {
        label: "Exchange Inflow",
        data: inflows,
        borderColor: "rgba(255, 99, 132, 1)",
        fill: false,
        tension: 0.2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Today's Market" },
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={chartData} options={options} />;
}
