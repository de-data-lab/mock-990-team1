import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navigator from "./nav-routes/Navigator";
import "./App.css";
import NavBar from "./nav-routes/NavBar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Navigator />
      </div>
    </BrowserRouter>
  );
}

export default App;
