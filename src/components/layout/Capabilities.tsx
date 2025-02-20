"use client";

import { useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ChartEvent,
  ActiveElement,
  TooltipItem,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const aiCapabilities = [
  "Multi-Modal Intelligence",
  "Autonomous Learning",
  "Deep Neural Networks",
  "Natural Language Processing",
  "Computer Vision",
  "Reinforcement Learning",
];

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
      pointRadius: 6,
      pointHoverRadius: 8,
    },
  ],
};

export default function AICapabilities() {
  const chartRef = useRef<ChartJS<"line"> | null>(null);
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!chartRef.current || isHovered) return;

      const chart = chartRef.current;
      const meta = chart.getDatasetMeta(0);

      if (chart.tooltip && meta.data[index]) {
        const { x, y } = meta.data[index].tooltipPosition(true);

        chart.setActiveElements([{ datasetIndex: 0, index }]);
        chart.tooltip.setActiveElements([{ datasetIndex: 0, index }], { x, y });
        chart.update();
      }

      setIndex((prevIndex) => (prevIndex + 1) % data.labels.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [index, isHovered]);

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
      tooltip: {
        backgroundColor: "#000",
        titleColor: "#fff",
        callbacks: {
          label: (tooltipItem: TooltipItem<"line">) => {
            const score = tooltipItem.raw;
            const capability = aiCapabilities[tooltipItem.dataIndex];
            return [`Score: ${score}`, capability];
          },
        },
      },
    },
    onHover: (_: ChartEvent, elements: ActiveElement[]) => {
      setIsHovered(elements.length > 0);
    },
  };

  return (
    <section className="max-w-screen-2xl mx-auto bg-purple-900 text-white py-20 px-4 md:px-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold bg-gradient-to-t from-fuchsia-500 to-blue-500 text-transparent bg-clip-text">
          AI Efficiency Analysis
        </h2>
        <p className="text-white mt-2 text-lg">
          Exploring diverse AI capabilities
        </p>
      </div>

      <div className="h-96">
        <Line ref={chartRef} data={data} options={options} />
      </div>
    </section>
  );
}
