import "./PicSlider.css";
import '../../index.css';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import { useEffect, useState } from "react";
import SVGImg from "../shared/SVGImg";
import NavPics from "./NavPics";
// import ProjectTitle from "../shared/ProjectTitle";

function PicSlider(props) {
  const [disabled, setDisabled] = useState(false);


  // SELECT CURRENT NAV-DOT ON MOUNT AND WHEN USING ARROW BTNS
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
      appear();
      checkCurrentInput();
  }, [props.currentIndex]);

  // TRANSITION EFFECT FX
  function dissolve() {
    const pic = document.getElementById("SVGImg-image");
    pic.classList.remove("fade-in");
    pic.classList.add("fade-out");
  }
  function appear() {
    const pic = document.getElementById("SVGImg-image");
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
    <div className="PicSlider">
      <h2 className="PicSlider-title">{props.title}</h2>
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
        currentImage={props.images[props.currentIndex]}
        parentClass="PicSlider-main-img"
        clickFunc={props.updateFunc} />
      <NavPics 
        images={props.images} 
        disabled={disabled} 
        clickFunc={handleDotClick} />
    </div>
  )
}
export default PicSlider;