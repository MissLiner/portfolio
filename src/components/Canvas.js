import Experience from './Experience';
import Home from './Home';
import '../index.css';
import Portfolio from './Portfolio';
import About from './About';
import React from 'react';

function Canvas(props) {
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
    <div className="Canvas">
      {renderCanvas()}
    </div>
  )
}
export default Canvas;