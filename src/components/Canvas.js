import Experience from './Experience';
import Home from './Home';
import '../index.css';
import Portfolio from './Portfolio';
import About from './About';
import { useState } from "react";
import React from 'react';
import CanvasNavbar from './CanvasNavbar';

function Canvas(props) {
  const [ btnList, setBtnList ] = useState("");
  // const [ view, setView ] = useState("home");
  const aboutBtns = [ "overview",
                      "career",
                      "webdev",
                      "personal"];
  const expBtns = [   "webdev",
                      "sales" ];
  const portfolioBtns = [ "design",
                          "testing",
                          "react",
                          "modules"];
  const updateBtnList = (e) => {
    switch(e.target.value) {
      case "home":
        setBtnList(aboutBtns);
        break;
      case "experience":
        setBtnList(expBtns);
        break;
      case "portfolio":
        setBtnList(portfolioBtns);
        break;
      default:
        break;
    }
  }
  const renderCanvas = () => {
    if(props.view === "home") {
      return(
        <Home />
      )
    } 
    else if(props.view === "about") {
      return(
        <About />
      )
    }
    else if(props.view === "experience") {
      return(
        <Experience />
      )
    }
    else if(props.view === "portfolio") {
      return(
        <Portfolio />
      )
    }
  }
  return(
    <div className="Canvas main">
      <CanvasNavbar clickFunc={updateBtnList} btnList={btnList} />
      {renderCanvas()}
    </div>
  )
}
export default Canvas;