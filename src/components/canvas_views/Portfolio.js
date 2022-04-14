import '../../index.css';
import './Portfolio.css';
import { useEffect, useState } from 'react';
import PicSlider from '../slider/PicSlider';
import ProjectDetail from '../project/ProjectDetail';
import { projectArray } from '../shared/projectArray';

function Portfolio() {
  // const [portView, setPortView] = useState("main");
  const [title, setTitle] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const updateIndex = (newValue) => {
    setCurrentIndex(newValue);
  }

  useEffect(() => {
    setTitle(projectArray[currentIndex].name);
  }, [currentIndex]) 

  // const renderPortfolio = () => {
  //   if(portView === "main") {
  //     return(
  //       <PicSlider 
  //         title={title}
  //         currentIndex={currentIndex}
  //         images={screenshotArray} 
  //         updateFunc={handlePicClick}
  //         indexFunc={updateIndex} />
  //     )
  //   } else {
  //     return(
            
  //     )
  //   }
  // }
  return(
    <div className="Portfolio">
      <PicSlider 
        // title={title}
        currentIndex={currentIndex}
        projects={projectArray} 
        indexFunc={updateIndex}
       />
      <ProjectDetail 
        title={title}
        projects={projectArray}
        currentIndex={currentIndex}
         />
    </div>
  )
}
export default Portfolio;