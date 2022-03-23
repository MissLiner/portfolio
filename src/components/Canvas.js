import Experience from './Experience';
import { screenContent } from './text';
import '../index.css';
import Portfolio from './Portfolio';
import React from 'react';

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
    else if(props.view === "about") {
      return(
        <div className="Canvas About content">
          <p>{screenContent.home[props.canvasView]}</p>
          </div>
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
    <div className="Canvas Home">
      {renderCanvas()}
    </div>
  )
}
export default Canvas;