import { useState } from "react";
import { Poppins } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import UpdaterComponent from "@/components/UpdaterComponent";
import GraphComponent from "@/components/GraphComponent";
import PieChartComponent from "@/components/PieChartComponent";
import QuickStatistics from "@/components/QuickStatistics";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  const [menu, selectMenu] = useState("dashboard");
  const [rank, setRank] = useState(3);
  const [percentile, setPercentile] = useState(50);
  const [score, setScore] = useState(60);

  const handleUpdate = (newRank, newPercentile, newScore) => {
    setRank(newRank);
    setPercentile(newPercentile);
    setScore(newScore);
  };

  return (
    <div
      className={`${poppins.className} min-h-screen lg:flex lg:flex-row bg-white text-black font-[var(--font-poppins)]`}
    >
      <Sidebar selectMenu={selectMenu} />

      <main className="w-full p-4 sm:p-6 md:p-8 lg:p-10 xl:p-14">
        {menu === "dashboard" && (
          <h1 className="text-2xl font-semibold">Welcome to the Dashboard</h1>
        )}

        {menu === "skillset" && (
          <div className="flex flex-col gap-6">
            <UpdaterComponent
              rank={rank}
              percentile={percentile}
              score={score}
              handleUpdate={handleUpdate}
            />

            <QuickStatistics
              rank={rank}
              percentile={percentile}
              score={score}
            />

            <div className="flex flex-col lg:flex-row gap-6">
              <GraphComponent percentile={percentile} />
              <PieChartComponent score={score} />
            </div>
          </div>
        )}

        {menu === "settings" && (
          <h1 className="text-2xl font-semibold">Settings Page</h1>
        )}
      </main>
    </div>
  );
}
