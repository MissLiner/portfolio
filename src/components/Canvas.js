import Experience from './Experience';
import Home from './Home';
import '../index.css';
import Portfolio from './Portfolio';
import About from './About';
import { activateBtn } from './helperFuncs'
import { useState, useEffect } from "react";
import React from 'react';
import CanvasNavbar from './CanvasNavbar';
import CurrentView from './CurrentView';

function Canvas(props) {
  const [ btnList, setBtnList ] = useState("");
  const [ screenClass, setScreenClass ] = useState("Canvas screen");
  const [ canvasView, setCanvasView ] = useState("");

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
  const adjustClass = () => {
    if(props.view !== "home") {
      setScreenClass("Canvas screen menu");
    } else {
      setScreenClass("Canvas screen");
    }
  }
  const handleClick = (e) => {
    updateBtnList();
    activateBtn(e);
    setCanvasView(e.target.value);
  }
  useEffect(() => {
    updateBtnList();
    adjustClass();
  }, [props.view],
  );
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
    <div className={screenClass}>
      <CanvasNavbar clickFunc={handleClick} btnList={btnList} />
      {renderCanvas()}
      <CurrentView view={props.view} canvasView={canvasView} />
    </div>
  )
}
export default Canvas;