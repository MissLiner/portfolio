import Experience from './Experience';
import { screenContent } from '../shared/text';
import '../../index.css';
import './Canvas.css';
import { React } from 'react';
import Home from '../canvas_views/Home'
import Portfolio from './Portfolio';

function Canvas(props) {
  // const [canvasView, setCanvasView] = useState("home");

  const renderCanvas = () => {
    if(props.mainView === "home") {
      return(
        <Home />
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
  return(
    <div className={"Canvas colors2"}>
      {renderCanvas()}
    </div>  
  )
}
export default Canvas;