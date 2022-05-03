import '../../index.scss';
import './Portfolio.css';
import { useState } from 'react';
import PicSlider from '../slider/PicSlider';
import ProjectDetail from '../project/ProjectDetail';
import { projectArray } from '../shared/projectArray';

function Portfolio() {

  const [contentIndex, setContentIndex] = useState(0);
  
  const updateContent = (newValue) => {
    setContentIndex(newValue);
  }

  return(
    <div className="Portfolio">
      <PicSlider 
        projects={projectArray} 
        updateContent={updateContent}
       />
      <ProjectDetail 
        projects={projectArray}
        currentIndex={contentIndex}
         />
    </div>
  )
}
export default Portfolio;