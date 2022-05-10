import '../../index.scss';
import './Canvas.css';
import { React } from 'react';
import Home from '../main_views/Home';
import About from '../main_views/About';
import Skills from '../main_views/Skills';
import Portfolio from '../main_views/Portfolio';

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
    <div className={"Canvas colors-Canvas"}>
      {renderCanvas()}
    </div>  
  )
}
export default Canvas;