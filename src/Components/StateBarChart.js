import React, { useState} from "react";
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
import { data_state_2018, data_state_2019,data_state_2020,data_state_2021 } from "../utils/StateData";
import { optionOverall } from "../utils/Config";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

function StateChartWithDropDown() {
  const [graphData, setGraphData] = useState(data_state_2018);
  const [graphOptions, setGraphOptions] = useState(optionOverall );
  const [graphTitle, setGraphTitle] = useState("Total Amount of Charitable Contributions Received by Nonprofits by State in 2018")

  const datasets = [
    { label: "Total Amount of Charitable Contributions Received by Nonprofits by State in 2018", options: optionOverall, data: data_state_2018 },
    { label: "Total Amount of Charitable Contributions Received by Nonprofits by State in 2019", options: optionOverall, data: data_state_2019 },
    { label: "Total Amount of Charitable Contributions Received by Nonprofits by State in 2020", options: optionOverall, data: data_state_2020 },
    { label: "Total Amount of Charitable Contributions Received by Nonprofits by State in 2021", options: optionOverall, data: data_state_2021 },
    
  ];
  
  return (
    <div>
      <DropdownButton id="dropdown-basic-button" title="Select Sector">
        {datasets.map((dataset) => (
          <Dropdown.Item
            onClick={() => {
              setGraphData(dataset.data);
              setGraphOptions(dataset.options);
              setGraphTitle(dataset.label)
            }}
          >
            {dataset.label}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      <h2>{graphTitle}</h2>
      <div>
        <Bar data={graphData} options={graphOptions} />
      </div>
    </div>
  );
}

export default StateChartWithDropDown;
