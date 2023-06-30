import React from "react";
import { Bar } from "react-chartjs-2";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { allRecievedByState } from "../utils/Data";
import { option2018 } from "../utils/Config";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function overallTab() {
  return (
    <div>
      <Bar data={allRecievedByState} options={option2018} />
    </div>
  );
}
export default overallTab