import React from "react";
import { Route, Routes,} from "react-router-dom";
import Home from "../home/Home";
import More from "../more/More";

function Navigator() {
  return (
    <div>
      <Routes>
        <Route path="/more" element={<More />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default Navigator;
