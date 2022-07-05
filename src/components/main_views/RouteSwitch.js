import { Routes, Route } from "react-router-dom";
// import App from ".././App";
import Home from "./Home";
import Portfolio from "./Portfolio";
import About from "./About";
import Skills from "./Skills";

const RouteSwitch = () => {
  return(
    // <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Portfolio />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
      </Routes>
    // </Router>
  )
}

export default RouteSwitch;