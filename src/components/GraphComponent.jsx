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
import { Label } from "@/components/ui/label";
import { FaChartLine } from "react-icons/fa"; // Importing icon for the heading

// Register the components of chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const GraphComponent = ({ percentile }) => {
  const percentileMessage =
    percentile >= 50
      ? `You scored ${percentile}, which is higher than ${percentile}% of developers who took this assignment.`
      : `You scored ${percentile}, which is lower than ${100 - percentile}% of developers who took this assignment.`;

  // Data for the chart
  const data = {
    labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"], // Percentile range from 0 to 100
    datasets: [
      {
        label: "Your Percentile",
        data: Array.from({ length: 11 }, (_, index) =>
          index <= percentile / 10 ? percentile : 0
        ), // Simulating percentile range
        borderColor: "rgba(75, 192, 192, 1)", // Line color
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Fill color
        fill: true, // Make the line area filled
        tension: 0.4, // Line smoothing
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `Percentile: ${tooltipItem.raw}%`; // Display percentile on hover
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Percentile Range", // X-axis label
        },
      },
      y: {
        display: false, // Hide the Y-axis
      },
    },
  };

  return (
    <div className="lg:w-1/2 w-full border rounded-lg drop-shadow-2xl p-7 mt-6">
      {/* Heading with Icon */}
      <div className="flex items-center mb-4">
        <FaChartLine size={30} className="mr-2 text-green-500" /> 
        <div className="text-2xl font-bold">Comparison Graph</div>
      </div>

      {/* Secondary Message */}
      <div className="text-lg font-semibold text-gray-500 mb-4">
        {percentileMessage}
      </div>

      <div className="mt-4">
        <Label>Percentile Chart</Label>
        <div className="mt-4" style={{ height: "200px", maxWidth: "400px" }}>
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default GraphComponent;
