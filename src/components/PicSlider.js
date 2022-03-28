import "./PicSlider.css";
import '../index.css';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import { useEffect, useState } from "react";
import ImageArray from "./ImageArray";
import NavDots from "./NavDots";

function PicSlider(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const returnCurrentPic = () => {
    const pics = Array.from(document.querySelectorAll(".slider-pic"));
    for(let pic of pics) {
      const index = parseInt(pic.dataset.index);
      if(index === currentIndex) {
        return pic;
      }
    }
  }
  const returnCurrentDot = () => {
    const dots = Array.from(document.querySelectorAll(".nav-dot"));
    for(let dot of dots) {
      const index = parseInt(dot.dataset.index);
      if(index === currentIndex) {
        return dot;
      }
    }
  }
  const showCurrentPic = () => {
    const currentPic = returnCurrentPic();
    currentPic.classList.remove("hidden");
  }

  const checkCurrentDot = () => {
    const currentDot = returnCurrentDot();
    currentDot.checked = true;
  }

  const hideCurrentPic = () => {
    const currentPic = returnCurrentPic();
    currentPic.classList.add("hidden");
  }
 async function dissolve() {
    const slider = document.getElementById("slider");
    slider.classList.remove("fade-in");
    slider.classList.add("fade-out");
    setTimeout(function() { hideCurrentPic() }, 999);
  }
  function appear() {
    const slider = document.getElementById("slider");
    const currentPic = returnCurrentPic();
    slider.classList.remove("fade-out");
    slider.classList.add("fade-in");
    currentPic.classList.remove("hidden");
  }

  // SET STARTING PIC AND DOT ON MOUNT
  useEffect(() => {
    showCurrentPic();
    checkCurrentDot();
  }, []);

  useEffect(() => {
    appear();
    checkCurrentDot();
  }, [currentIndex])

  const handleRightClick = (e) => {
    setDisabled(true);
    if(currentIndex < props.images.length - 1) {
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
    setDisabled(true);
    if(currentIndex > 0) {
      dissolve();
      setTimeout(function() { 
        setCurrentIndex(currentIndex - 1);
      }, 1000);
      setTimeout(function() {
        setDisabled(false);
      }, 2200);
    }

  }

  // function handleDotClick(e) {
  //   dissolve(currentPic);
  //   setCurrentIndex(e.target.dataset.index);
  //   updateCurrentPic();
  //   updateCurrentDot();
  //   appear(currentPic);
  //   currentDot.checked = true;
  // }
  return(
    <div className="pic-frame-outer">
      <button 
        className="slider-btn slider-btn-left" 
        disabled={disabled}
        onClick={handleLeftClick}
        ><ArrowCircleLeftRoundedIcon />
      </button>
      <button 
        className="slider-btn slider-btn-right"
        disabled={disabled}
        onClick={handleRightClick}
        ><ArrowCircleRightRoundedIcon />
      </button>
      <div className="pic-frame-inner" id="pic-frame-inner">
        <ImageArray images={props.images} index={currentIndex} />
      </div>
      <NavDots images={props.images} />
    </div>
  )
}
export default PicSlider;