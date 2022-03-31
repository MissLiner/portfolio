import '../index.css';
import PicSlider from './PicSlider';
import { useEffect, useState } from 'react';
import ProjectDetail from './project/ProjectDetail';
import { screenshotArray } from './shared/screenshotArray';

function Portfolio(props) {
  const [portView, setPortView] = useState("main");
  const [title, setTitle] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const updateIndex = (newValue) => {
    setCurrentIndex(newValue);
  }

  useEffect(() => {
    setTitle(screenshotArray[currentIndex][3]);
  }, [currentIndex]) 

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
          images={screenshotArray} 
          updateFunc={handlePicClick}
          indexFunc={updateIndex} />
      )
    } else {
      return(
        <ProjectDetail 
          title={title}
          images={screenshotArray}
          currentIndex={currentIndex}
          exitFunc={handleExit} />
      )
    }
  }
  return(
    <div className="Portfolio container">
      {renderPortfolio()}
    </div>
  )
}
export default Portfolio;