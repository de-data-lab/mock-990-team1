import React from "react";
import "./Home.css";
import Map from "../Components/Map";

function Home() {
  return (
    <div className="container">
      <div className="text-center mt-5">
        <h1>Mock Project Base</h1>
        <p className="lead">Our project about Non Profit Funding</p>
        <p>It's all fun here!</p>
      </div>
      <Map/>
    </div>
  );
}
export default Home;
