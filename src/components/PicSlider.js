import "./PicSlider.css";
import '../index.css';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import { useEffect, useState } from "react";
import SliderImage from "./SliderImage";
import NavPics from "./NavPics";
import ProjectTitle from "./ProjectTitle";

function PicSlider(props) {
  const [disabled, setDisabled] = useState(false);


  // SELECT CURRENT NAV-DOT ON MOUNT AND WHEN USING ARROW BTNS
  useEffect(() => {
      const returnCurrentDot = () => {
        const dots = Array.from(document.querySelectorAll(".nav-dot"));
        for(let dot of dots) {
          const index = parseInt(dot.dataset.index);
          if(index === props.currentIndex) {
            return dot;
          }
        }
      }
      const checkCurrentDot = () => {
        const currentDot = returnCurrentDot();
        currentDot.checked = true;
      }

      appear();
      checkCurrentDot();
  }, [props.currentIndex]);

  // TRANSITION EFFECT FX
  function dissolve() {
    const pic = document.getElementById("svg-img");
    pic.classList.remove("fade-in");
    pic.classList.add("fade-out");
  }
  function appear() {
    const pic = document.getElementById("svg-img");
    pic.classList.remove("fade-out");
    pic.classList.add("fade-in");
  }

  // NAVIGATION FX
  const handleRightClick = (e) => {
    if(props.currentIndex < props.images.length - 1) {
      const newIndex = props.currentIndex + 1;
      setDisabled(true);
      dissolve();
      setTimeout(function() { 
        props.indexFunc(newIndex);
      }, 1000);
      setTimeout(function() {
        setDisabled(false);
      }, 2200);
    }
  }

  const handleLeftClick = (e) => {
    if(props.currentIndex > 0) {
      const newIndex = props.currentIndex - 1;
      setDisabled(true);
      dissolve();
      setTimeout(function() { 
        props.indexFunc(newIndex);
      }, 1000);
      setTimeout(function() {
        setDisabled(false);
      }, 2200);
    }

  }

  function handleDotClick(e) {
    const newIndex = parseInt(e.target.dataset.index);
    setDisabled(true);
    dissolve();
    setTimeout(function() { 
      props.indexFunc(newIndex);
    }, 1000);
    setTimeout(function() {
      setDisabled(false);
    }, 2200);
  }

  return(
    <div className="PicSlider container">
      <ProjectTitle title={props.title} titleClass="PicSlider title" />
      <button 
        className="PicSlider btn btn-left" 
        disabled={disabled}
        onClick={handleLeftClick}
        ><ArrowCircleLeftRoundedIcon fontSize="large" />
      </button>
      <button 
        className="PicSlider btn btn-right"
        disabled={disabled}
        onClick={handleRightClick}
        ><ArrowCircleRightRoundedIcon fontSize="large" />
      </button>
      <SliderImage 
        images={props.images} 
        compName="PicSlider"
        index={props.currentIndex} 
        clickFunc={props.updateFunc} />
      <NavPics 
        images={props.images} 
        disabled={disabled} 
        clickFunc={handleDotClick} />
    </div>
  )
}
export default PicSlider;