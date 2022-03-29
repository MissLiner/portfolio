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
  const [title, setTitle] = useState("");

  // SELECT CURRENT NAV-DOT ON MOUNT AND WHEN USING ARROW BTNS
  useEffect(() => {
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
      setTitle(props.images[currentIndex][3]);
      appear();
      checkCurrentDot();
  }, [currentIndex]);

  // TRANSITION EFFECT FX
  function dissolve() {
    const pic = document.getElementById("slider-pic");
    pic.classList.remove("fade-in");
    pic.classList.add("fade-out");
  }
  function appear() {
    const pic = document.getElementById("slider-pic");
    pic.classList.remove("fade-out");
    pic.classList.add("fade-in");
  }

  // NAVIGATION FX
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
      <h2 className="slider-title">{title}</h2>
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

        <SliderImage images={props.images} index={currentIndex} clickFunc={props.updateFunc} />
      <NavPics images={props.images} disabled={disabled} clickFunc={handleDotClick} />
    </div>
  )
}
export default PicSlider;