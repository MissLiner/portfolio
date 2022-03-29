import Experience from './Experience';
import { screenContent } from './text';
import '../index.css';
import { screenshotArray } from "./screenshotArray";
import React from 'react';
import Portfolio from './Portfolio';

function Canvas(props) {

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
        <Portfolio imageArr={screenshotArray} />
      )
    }
  }
  return(
    <div className="Canvas content-container">
      {renderCanvas()}
    </div>
  )
}
export default Canvas;