import "./PicSlider.css";
import '../index.css';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import { useEffect, useState } from "react";
import SliderImage from "./SliderImage";
import NavPics from "./NavPics";

function PicSlider(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const returnCurrentDot = () => {
    const dots = Array.from(document.querySelectorAll(".nav-dot"));
    for(let dot of dots) {
      const index = parseInt(dot.dataset.index);
      if(index === currentIndex) {
        return dot;
      }
    }
  }

  const checkCurrentDot = () => {
    const currentDot = returnCurrentDot();
    currentDot.checked = true;
  }

 async function dissolve() {
    const pic = document.getElementById("slider-pic");
    pic.classList.remove("fade-in");
    pic.classList.add("fade-out");
  }
  function appear() {
    const pic = document.getElementById("slider-pic");
    pic.classList.remove("fade-out");
    pic.classList.add("fade-in");
  }

  // SET STARTING PIC AND DOT ON MOUNT
  useEffect(() => {
    checkCurrentDot();
  }, []);

  useEffect(() => {
    appear();
    checkCurrentDot();
  }, [currentIndex])

  const handleRightClick = (e) => {
    if(currentIndex < props.images.length - 1) {
      setDisabled(true);
      dissolve();
      setTimeout(function() { 
        setCurrentIndex(currentIndex + 1);
      }, 1000);
      setTimeout(function() {
        setDisabled(false);
      }, 2200);
    }
  }

  const handleLeftClick = (e) => {
    if(currentIndex > 0) {
      setDisabled(true);
      dissolve();
      setTimeout(function() { 
        setCurrentIndex(currentIndex - 1);
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
      setCurrentIndex(newIndex);
    }, 1000);
    setTimeout(function() {
      setDisabled(false);
    }, 2200);
  }
  return(
    <div className="pic-frame-outer">
      <button 
        className="slider-btn slider-btn-left" 
        disabled={disabled}
        onClick={handleLeftClick}
        ><ArrowCircleLeftRoundedIcon fontSize="large" />
      </button>
      <button 
        className="slider-btn slider-btn-right"
        disabled={disabled}
        onClick={handleRightClick}
        ><ArrowCircleRightRoundedIcon fontSize="large" />
      </button>
      <div className="pic-frame-inner" id="pic-frame-inner">
        <SliderImage images={props.images} index={currentIndex} />
      </div>
      <NavPics images={props.images} disabled={disabled} clickFunc={handleDotClick} />
    </div>
  )
}
export default PicSlider;