import Experience from './Experience';
import Home from './Home';
import './index.css';

function Canvas(props) {
  const renderCanvas = () => {
    if(props.view === "home") {
      return(
        <Home />
      )
    } 
    else if(props.view === "experience") {
      return(
        <Experience />
      )
    }
    else if()
  }
  return(
    <div className="Canvas main">
    </div>
  )
}