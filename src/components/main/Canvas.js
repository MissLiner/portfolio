import '../../index.css';
import './Canvas.css';
import { React } from 'react';
import Home from '../canvas_views/Home';
import About from '../canvas_views/About';
import Experience from '../canvas_views/Experience';
import Portfolio from '../canvas_views/Portfolio';
import { screenContent } from '../shared/text';

function Canvas(props) {
  const renderCanvas = () => {
    if(props.mainView === "home") {
      return(
        <Home />
      )
    } 
    else if(props.mainView === "about") {
      return(
        <About />
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
  return(
    <div className={"Canvas colors2"}>
      {renderCanvas()}
    </div>  
  )
}
export default Canvas;