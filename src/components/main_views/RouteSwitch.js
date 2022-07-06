import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./Home";
import Portfolio from "./Portfolio";
import About from "./About";
import Skills from "./Skills";

const RouteSwitch = () => {
  return(
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="/portfolio/projects" element={<Portfolio />} />
        <Route path="/portfolio/skills" element={<Skills />} />
        <Route path="/portfolio/about" element={<About />} />
        <Route path="*" element={ <Navigate to="/portfolio" /> } />
      </Routes>
  )
}

export default RouteSwitch;