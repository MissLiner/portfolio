import '../index.css';
import PicSlider from './PicSlider';
import { useEffect, useState } from 'react';
import ProjectDetail from './ProjectDetail';

function Portfolio(props) {
  const [portView, setPortView] = useState("main");
  const [title, setTitle] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const updateIndex = (newValue) => {
    setCurrentIndex(newValue);
  }

  useEffect(() => {
    setTitle(props.imageArr[currentIndex][3]);
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
    <div className="Portfolio container">
      {renderPortfolio()}
    </div>
  )
}
export default Portfolio;