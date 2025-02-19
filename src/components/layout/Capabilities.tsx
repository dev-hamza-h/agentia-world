"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Score",
      data: [75, 80, 68, 90, 85, 95],
      borderColor: "#22d3ee",
      backgroundColor: "rgba(34, 211, 238, 0.2)",
      pointBackgroundColor: "#8b5cf6",
      pointBorderColor: "#fff",
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: { display: false },
      ticks: { color: "#fff" },
    },
    y: {
      grid: { color: "#c026d3" },
      ticks: { color: "#fff" },
    },
  },
  plugins: {
    legend: { display: false },
    tooltip: { backgroundColor: "#000", titleColor: "#fff" },
  },
};

export default function AICapabilities() {
  return (
    <section className="max-w-screen-2xl mx-auto bg-purple-900 text-white py-20 px-4 md:px-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold bg-gradient-to-t from-fuchsia-500 to-blue-500 text-transparent bg-clip-text">
          AI Capabilities
        </h2>
        <p className="text-white mt-2 text-lg">
          Revolutionizing industries with cutting-edge AI solutions
        </p>
      </div>
      <div className="h-96">
        <Line data={data} options={options} />
      </div>
    </section>
  );
}
