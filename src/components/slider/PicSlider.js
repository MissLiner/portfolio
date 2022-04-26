import "./PicSlider.css";
import '../../index.css';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import { useEffect, useState } from "react";
import SVGImg from "../shared/SVGImg";
import NavPics from "./NavPics";

function PicSlider(props) {
  const [disabled, setDisabled] = useState(false);
  const [touchStart, setTouchStart] = useState("");


  // SELECT CURRENT NAV-DOT
  useEffect(() => {
      const returnCurrentInput = () => {
        const inputs = Array.from(document.querySelectorAll(".NavPics-input"));
        for(let input of inputs) {
          const index = parseInt(input.dataset.index);
          if(index === props.currentIndex) {
            return input;
          }
        }
      }
      const checkCurrentInput = () => {
        const currentInput = returnCurrentInput();
        currentInput.checked = true;
      }
      appearPic();
      appearText();
      checkCurrentInput();
  }, [props.currentIndex]);

  // TRANSITION FX
  function dissolvePic() {
    const pic = document.getElementById("SVGImg-image");
    pic.classList.remove("fade-in");
    pic.classList.add("fade-out");
  }
  function appearPic() {
    const pic = document.getElementById("SVGImg-image");
    pic.classList.remove("fade-out");
    pic.classList.add("fade-in");
  }
  function dissolveText() {
    const text = document.getElementById("ProjectDetail");
    text.classList.remove("fade-in");
    text.classList.add("fade-out");
  }
  function appearText() {
    const text = document.getElementById("ProjectDetail");
    text.classList.remove("fade-out");
    text.classList.add("fade-in");
  }

  // NAVIGATION FX
  const handleRightClick = (e) => {
    if(props.currentIndex < props.projects.length - 1) {
      const newIndex = props.currentIndex + 1;
      setDisabled(true);
      dissolvePic();
      dissolveText();
      setTimeout(function() { 
        props.indexFunc(newIndex);
      }, 800);
      setTimeout(function() {
        setDisabled(false);
      }, 2200);
    }
  }

  const handleLeftClick = (e) => {
    if(props.currentIndex > 0) {
      const newIndex = props.currentIndex - 1;
      setDisabled(true);
      dissolvePic();
      dissolveText();
      setTimeout(function() { 
        props.indexFunc(newIndex);
      }, 800);
      setTimeout(function() {
        setDisabled(false);
      }, 2200);
    }
  }

  function handleNavClick(e) {
    const newIndex = parseInt(e.target.dataset.index);
    setDisabled(true);
    dissolvePic();
    setTimeout(function() { 
      props.indexFunc(newIndex);
    }, 800);
    setTimeout(function() {
      setDisabled(false);
    }, 2200);
  }
  function handleTouchStart(e) {
    const touchDown = e.touches[0].clientX;
    setTouchStart(touchDown);
  }
  function handleTouchMove(e) {
    const touchDown = touchStart;
    if(touchDown === null) {
      return;
    }
    const currentTouch = e.touches[0].clientX;
    const movement = touchDown - currentTouch;
    if(movement > 5) {
      handleRightClick();
    }
    if(movement < -5) {
      handleLeftClick();
    }
    setTouchStart(null);
  }

  return(
    <div className="PicSlider">
      <button 
        className="PicSlider-btn btn-left" 
        disabled={disabled}
        onClick={handleLeftClick}
        ><ArrowCircleLeftRoundedIcon fontSize="large" />
      </button>
      <button 
        className="PicSlider-btn btn-right"
        disabled={disabled}
        onClick={handleRightClick}
        ><ArrowCircleRightRoundedIcon fontSize="large" />
      </button>
      <SVGImg 
        currentImage={props.projects[props.currentIndex].sliderRefs}
        parentClass="PicSlider-main-img"
        touchStartFunc={handleTouchStart}
        touchMoveFunc={handleTouchMove} />
      <NavPics 
        projects={props.projects} 
        disabled={disabled} 
        clickFunc={handleNavClick} />
    </div>
  )
}
export default PicSlider;