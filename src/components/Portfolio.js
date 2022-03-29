import '../index.css';
import PicSlider from './PicSlider';
import { useState } from 'react';
import ProjectDetail from './ProjectDetail';

function Portfolio(props) {
  const [portView, setPortView] = useState("main");

  const handlePicClick = (e) => {
    setPortView(e.target.dataset.name);
  }
  const handleExit = () => {
    setPortView("main");
  }
  const renderPortfolio = () => {
    if(portView === "main") {
      return(
        <PicSlider 
          images={props.imageArr} 
          updateFunc={handlePicClick} />
      )
    } else {
      return(
        <ProjectDetail exitFunc={handleExit} />
      )
    }
  }
  return(
    <div>
      {renderPortfolio()}
    </div>
  )
}
export default Portfolio;