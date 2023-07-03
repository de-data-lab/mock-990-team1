import React from "react";
import "./Home.css";
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
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { data_overall } from "../utils/Data";
import { optionOverall } from "../utils/Config";
import ChartWithDropDown from "../Components/BarChart";
import StateChartWithDropDown from "../Components/StateBarChart";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Home() {
  return (
    <div className="container">
      <div className="text-center mt-5">
        <h1>Grant Tracker</h1>
        <p className="lead">
          A Tool to see Charitable Contributions to Nonprofits
        </p>
        <p>
          This tool was made to see the total amount of charitable contributions
          received by nonprofit organizations. All contributions data was gathered from Tax
          Form 990: Section 1, line 1. Sectors are defined by the organization's NTEE code on form 990. The money values have not been adjusted for inflation.
        </p>
        <h6>Click on a tab to see more information</h6>
      </div>
      <Tabs defaultActiveKey="profile" id="tabs" className="mb-3">
        <Tab eventKey="overall" title="Overall">
          <h2>
            Total Amount of Charitable Contributions Received by Nonprofits
          </h2>
          <Bar data={data_overall} options={optionOverall} />
        </Tab>
        <Tab eventKey="sector" title="Sector">
          <ChartWithDropDown />
        </Tab>
        <Tab eventKey="state" title="State">
          <StateChartWithDropDown />
        </Tab>
      </Tabs>
    </div>
  );
}
export default Home;
