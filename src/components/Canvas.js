import Home from './Home';
import './index.css';

function Canvas(props) {
  const renderCanvas = () => {
    if(props.view === "Home") {
      return(
        <Home />
      )
    }
  }
  return(
    <div className="Canvas main">
    </div>
  )
}