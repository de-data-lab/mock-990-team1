import React, {useState, useEffect} from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
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
    const [graphData,setGraphData] = useState(data)
    const [graphOptions, setGraphOptions] =useState(option)

    function data1(evt){
        setGraphData(data)
        setGraphOptions(option)
    }
    function data2(evt){
        setGraphData(allRecievedByState)
        setGraphOptions(option2018)
    }

  return (
    <div>
    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
      <Dropdown.Item onClick={data1}>Data Set one</Dropdown.Item>
      <Dropdown.Item onClick={data2}>Data Set two</Dropdown.Item>
    </DropdownButton>
    <div><Bar data={graphData} options={graphOptions}/></div>
    </div>
  );
}

export default ChartWithDropDown