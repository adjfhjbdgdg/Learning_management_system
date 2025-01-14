import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the necessary chart components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["Absent", "Present"],
    datasets: [
      {
        data: [30, 70], // Percentages
        backgroundColor: ["#808080", "#007bff"], // Colors
        hoverBackgroundColor: ["#6c757d", "#0056b3"], // Hover colors
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "top",
      },
    },
    maintainAspectRatio: false, // Allow custom sizing
  };

  return (
    <div
      style={{
        width: "300px", // Set width
        height: "300px", // Set height
        margin: "0 auto", // Center the chart
      }}
    >
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
