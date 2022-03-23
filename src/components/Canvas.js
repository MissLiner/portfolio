import Experience from './Experience';
import Home from './Home';
import '../index.css';
import Portfolio from './Portfolio';
import About from './About';
import { useState, useEffect } from "react";
import React from 'react';

function Canvas(props) {
  const [ screenClass, setScreenClass ] = useState("Canvas screen");

  const adjustClass = () => {
    if(props.view !== "home") {
      setScreenClass("Canvas screen menu");
    } else {
      setScreenClass("Canvas screen");
    }
  }
  // useEffect(() => {
  //   adjustClass();
  // }, [],
  // );
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
      {renderCanvas()}
    </div>
  )
}
export default Canvas;