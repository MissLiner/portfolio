import Experience from './Experience';
import { screenContent } from './text';
import '../index.css';
import Portfolio from './Portfolio';
import About from './About';
import React from 'react';

function Canvas(props) {
  const renderCanvas = () => {
    if(props.view === "home") {
      return(
        <div className="Canvas Home content">
          <q className="Canvas">{screenContent.quote}</q>
          <h3 className="Canvas">{screenContent.author + ", "}
            <i className="Canvas">{screenContent.source}</i>
          </h3>
      </div>
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
    <div className="Canvas">
      {renderCanvas()}
    </div>
  )
}
export default Canvas;