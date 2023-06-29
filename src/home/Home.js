import React from "react";
import "./Home.css";
import { Bar } from "react-chartjs-2";
import { BarElement,  CategoryScale,Chart as ChartJS,Legend, LinearScale,Title, Tooltip } from "chart.js";
import option from "../utils/Config";
import data from "../utils/Data";
import  {data2018}  from "../utils/Data";
import {option2018}  from "../utils/Config";
ChartJS.register(CategoryScale, LinearScale, BarElement,Title,Tooltip,Legend);


function Home() {
  return (
    <div className="container">
      <div className="text-center mt-5">
        <h1>Mock Project Base</h1>
        <p className="lead">Our project about Non Profit Funding</p>
        <p>It's all fun here!</p>
      </div>
      <Bar data={data2018} options={option2018}/>
    </div>
  );
}
export default Home;
