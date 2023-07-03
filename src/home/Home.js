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
import { allRecievedByState , data_overall} from "../utils/Data";
import { option2018, option} from "../utils/Config";
import BasicButtonExample from "../Components/BarChart";
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
        <h1>Mock Project Base</h1>
        <p className="lead">Our project about Non Profit Funding</p>
        <p>It's all fun here!</p>
      </div>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="overall" title="Overall">
          <Bar data={data_overall} options={option} />
        </Tab>
        <Tab eventKey="sector" title="Sector">
         
          <BasicButtonExample/>
        </Tab>
        <Tab eventKey="state" title="State">
        <Bar data={allRecievedByState} options={option2018} />
        </Tab>
      </Tabs>
    </div>
  );
}
export default Home;
