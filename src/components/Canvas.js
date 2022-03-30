import Experience from './Experience';
import { screenContent } from './text';
import '../index.css';
import '../styles/Canvas.css';
import { React, useEffect, useState } from 'react';
import Portfolio from './Portfolio';
import { activateBtn } from './helperFuncs';
import { btnLabels } from '../components/text';
import Navbar from './Navbar';

function Canvas(props) {
  const [canvasView, setCanvasView] = useState("home");
  const [canvasBtns, setCanvasBtns] = useState("");
  const [screenClass, setScreenClass] = useState("Canvas screen");

  const handleClickCanvas = (e) => {
    setCanvasView(e.target.value);
    activateBtn(e);
  }
  useEffect(() => {
    if(props.view === "home") {
      setCanvasView("home");
    }
    if(props.view !== "home" && props.view !== "portfolio") {
      setCanvasBtns(btnLabels[canvasView]);
      setScreenClass("Canvas screen menu");
    } else {
      setCanvasBtns("");
      setScreenClass("Canvas screen");
    }
  }, [props.view]);
  const renderCanvas = () => {
    if(props.mainView === "home") {
      return(
        <div className="Canvas Home content">
          <q className="Canvas">{screenContent.home.quote}</q>
          <h3 className="Canvas">{screenContent.home.author + ", "}
            <i className="Canvas">{screenContent.home.source}</i>
          </h3>
      </div>
      )
    } 
    else if(props.mainView === "about") {
      return(
        <div className="Canvas About content">
          <p className="Canvas">{screenContent.about[props.canvasView]}</p>
          </div>
      )
    }
    else if(props.mainView === "experience") {
      return(
        <Experience />
      )
    }
    else if(props.mainView === "portfolio") {
      return(
        <Portfolio />
      )
    }
  }
  const renderCanvasNav = () => {
    if(canvasBtns) {
      return(
        <Navbar 
          clickFunc={handleClickCanvas}
          addClasses="side"
          btnList={canvasBtns}
          symbol="." />
      )
    } else {
      return null;
    }
  }
  return(
    <div className={"Canvas content-container" + screenClass}>
      {renderCanvas()}
      {renderCanvasNav()}
    </div>
  )
}
export default Canvas;