import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { FaChartLine } from "react-icons/fa";
import { useEffect, useState } from "react";

// Register the components of chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartComponent = ({ score }) => {
  const [scoreValue, setScoreValue] = useState(25);
  const data = {
    labels: ["Correct", "Incorrect"],
    datasets: [
      {
        label: "Your Score",
        data: [score, 100 - score], // Score and remaining questions
        backgroundColor: ["#4caf50", "#ffffff"], // Correct: green, Incorrect: white
        borderColor: "#d3d3d3", // Grey border color
        borderWidth: 2, // Border width
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.raw === 100 - score
              ? `Incorrect: ${tooltipItem.raw}`
              : `Correct: ${tooltipItem.raw}`;
          },
        },
      },
    },
    elements: {
      arc: {
        borderWidth: 2, // Adds a border around the pie slices
      },
    },
  };

  useEffect(() => {
    setScoreValue(score);
  }, [score]);

  return (
    <div className="flex flex-col lg:w-1/2 w-full border mt-7 rounded-lg p-4 border-gray-300">
      <div className="flex items-center mb-4">
        <FaChartLine size={30} className="mr-2 text-green-500" />
        <div className="text-2xl font-bold">Question Analysis</div>
      </div>

      {/* Secondary Message */}
      <div className="text-lg font-semibold text-gray-500 mb-4">
        {`You scored ${scoreValue} out of 100 !!`}
      </div>
      <div className="mt-4 flex justify-center items-center">
        <div className="w-[300px] h-[300px]">
          <Pie data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default PieChartComponent;
