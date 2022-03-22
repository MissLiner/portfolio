import Experience from './Experience';
import Home from './Home';
import '../index.css';
import Portfolio from './Portfolio';
import About from './About';
import { useState, useEffect } from "react";
import React from 'react';
import CanvasNavbar from './CanvasNavbar';

function Canvas(props) {
  const [ btnList, setBtnList ] = useState("");

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
  const updateBtnList = () => {
    switch(props.view) {
      case "about":
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
  useEffect(() => {
    updateBtnList();
  })
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