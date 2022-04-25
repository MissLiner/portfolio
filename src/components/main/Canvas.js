import '../../index.css';
import './Canvas.css';
import { React } from 'react';
import Home from '../canvas_views/Home';
import About from '../canvas_views/About';
import Skills from '../canvas_views/Skills';
import Portfolio from '../canvas_views/Portfolio';

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
    else if(props.mainView === "skills") {
      return(
        <Skills />
      )
    }
    else if(props.mainView === "projects") {
      return(
        <Portfolio />
      )
    }
  }
  return(
    <div className={"Canvas colors-secondary"}>
      {renderCanvas()}
    </div>  
  )
}
export default Canvas;