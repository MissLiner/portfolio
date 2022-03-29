import '../index.css';
import PicSlider from './PicSlider';
import { useState } from 'react';
import ProjectDetail from './ProjectDetail';

function Portfolio(props) {
  const [portView, setPortView] = useState("main");
  const [title, setTitle] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const updateIndex = (newValue) => {
    setCurrentIndex(newValue);
  }


  setTitle(props.images[currentIndex][3]);

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
          title={title}
          currentIndex={currentIndex}
          images={props.imageArr} 
          updateFunc={handlePicClick}
          indexFunc={updateIndex} />
      )
    } else {
      return(
        <ProjectDetail 
          title={title}
          currentIndex={currentIndex}
          exitFunc={handleExit} />
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