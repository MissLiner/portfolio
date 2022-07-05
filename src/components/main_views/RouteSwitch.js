import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import App from ".././App";
import Home from "./Home";
import Portfolio from "./Portfolio";
import About from "./About";
import Skills from "./Skills";

const RouteSwitch = () => {
  return(
    <Router>
      <Routes>
        <Route path="/"> <Home /> </Route>
        <Route path="/projects"> <Portfolio /></Route>
        <Route path="/skills"><Skills /></Route>
        <Route path="/about"><About /></Route>
      </Routes>
    </Router>
  )
}

export default RouteSwitch;