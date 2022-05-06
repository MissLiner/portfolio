import "./PicSlider.css";
import '../../index.scss';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import { useEffect, useState } from "react";
import SVGImg from "../shared/SVGImg";
import NavPics from "./NavPics";

function PicSlider(props) {
  const [disabled, setDisabled] = useState(false);
  const [touchStart, setTouchStart] = useState("");
  const [sliderIndex, setSliderIndex] = useState(0);

  const updateSlider = (newValue) => {
    setSliderIndex(newValue);
  }
  const updateContent = () => {
    props.updateContent(sliderIndex);
  }
  // useEffect(() => {
  //   props.updateFunc(sliderIndex);
  // });

  // SELECT CURRENT NAV-DOT
  useEffect(() => {
      const returnCurrentInput = () => {
        const inputs = Array.from(document.querySelectorAll(".NavPics-input"));
        for(let input of inputs) {
          const index = parseInt(input.dataset.index);
          if(index === sliderIndex) {
            return input;
          }
        }
      }
      const checkCurrentInput = () => {
        const currentInput = returnCurrentInput();
        currentInput.checked = true;
      }
      checkCurrentInput();
  }, [sliderIndex]);

  // NAVIGATION FX
  const handleRightClick = (e) => {
    if(sliderIndex < props.projects.length - 1) {
      const newIndex = sliderIndex + 1;
      setDisabled(true);
      updateSlider(newIndex);
      setTimeout(function() {
        setDisabled(false);
      }, 500);
    }
  }

  const handleLeftClick = (e) => {
    if(sliderIndex > 0) {
      const newIndex = sliderIndex - 1;
      setDisabled(true);
      updateSlider(newIndex);
      setTimeout(function() {
        setDisabled(false);
      }, 500);
    }
  }

  function handleNavClick(e) {
    const newIndex = parseInt(e.target.dataset.index);
    setDisabled(true);
    updateSlider(newIndex);
    setTimeout(function() {
      setDisabled(false);
    }, 500);
  }

  // SWIPE FX
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
    if(movement > 7) {
      handleRightClick();
    }
    if(movement < -7) {
      handleLeftClick();
    }
    setTouchStart(null);
  }

  return(
    <div className="PicSlider" preventScrollOnSwipe="true">
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
        currentImage={props.projects[sliderIndex].sliderRefs}
        parentClass="PicSlider-main-img"
        touchStartFunc={handleTouchStart}
        touchMoveFunc={handleTouchMove}
        loadFunc={updateContent}
      />
      <NavPics 
        projects={props.projects} 
        disabled={disabled} 
        clickFunc={handleNavClick} 
      />
    </div>
  )
}
export default PicSlider;