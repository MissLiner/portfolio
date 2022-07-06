import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./Home";
import Portfolio from "./Portfolio";
import About from "./About";
import Skills from "./Skills";

const RouteSwitch = () => {
  return(
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Portfolio />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={ <Navigate to="/" /> } />
      </Routes>
  )
}

export default RouteSwitch;