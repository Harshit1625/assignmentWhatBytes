import { FaSortNumericDown, FaChartPie, FaStar } from "react-icons/fa";

const QuickStatistics = ({ rank, percentile, score }) => {
  return (
    <div className="border border-gray-300 shadow-md p-6 mt-6 rounded-lg w-full">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <FaChartPie className="text-blue-600" />
        Quick Statistics
      </h2>

      <div className="flex flex-row gap-6">
        {/* Rank */}
        <div className="flex items-center gap-3 w-1/3 border border-gray-200 p-4 rounded-md shadow-sm">
          <FaSortNumericDown size={24} className="text-purple-500" />
          <div>
            <div className="text-sm text-gray-500">Rank</div>
            <div className="text-lg font-semibold">{rank}</div>
          </div>
        </div>

        {/* Percentile */}
        <div className="flex items-center gap-3 w-1/3 border border-gray-200 p-4 rounded-md shadow-sm">
          <FaChartPie size={24} className="text-green-500" />
          <div>
            <div className="text-sm text-gray-500">Percentile</div>
            <div className="text-lg font-semibold">{percentile}%</div>
          </div>
        </div>

        {/* Score */}
        <div className="flex items-center gap-3 w-1/3 border border-gray-200 p-4 rounded-md shadow-sm">
          <FaStar size={24} className="text-yellow-500" />
          <div>
            <div className="text-sm text-gray-500">Score</div>
            <div className="text-lg font-semibold">{score} / 100</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickStatistics;
