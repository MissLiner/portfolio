import '../index.css';
import PicSlider from './PicSlider';
import { useState } from 'react';

function Portfolio(props) {
  const [portView, setPortView] = useState("main");

  const handlePicClick = (e) => {
    setPortView(e.target.dataset.name);
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
        <PicSlider 
        images={props.imageArr} 
        updateFunc={handlePicClick} />
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