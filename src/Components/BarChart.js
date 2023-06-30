import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
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
import { data, allRecievedByState } from "../utils/Data";
import { option, option2018 } from "../utils/Config";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function ChartWithDropDown() {
  const [graphData, setGraphData] = useState(data);
  const [graphOptions, setGraphOptions] = useState(option);

  const datasets = [
    { label: "Data Set One", options: option, data: data },
    { label: "Data Set Two", options: option2018, data: allRecievedByState },
  ];

  return (
    <div>
      <DropdownButton id="dropdown-basic-button" title="Dropdown button">
        {datasets.map((dataset) => (
          <Dropdown.Item
            onClick={() => {
              setGraphData(dataset.data);
              setGraphOptions(dataset.options);
            }}
          >
            {dataset.label}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      <div>
        <Bar data={graphData} options={graphOptions} />
      </div>
    </div>
  );
}

export default ChartWithDropDown;
