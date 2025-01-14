import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const data = {
    labels: ["Present", "Absent"], // X-axis labels
    datasets: [
      {
        label: "Count", // Dataset label (hidden via legend options)
        data: [7, 3], // Values for the bars
        backgroundColor: ["#007bff", "#808080"], // Bar colors
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Hides the legend (removes "Count")
      },
      tooltip: {
        enabled: true, // Keeps tooltips active for bars
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Student Attendance",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Count",
        },
      },
    },
  };

  return (
    <div
      style={{
        width: "600px", // Adjust width
        height: "400px", // Adjust height
        margin: "0 auto", // Center the chart
      }}
    >
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
