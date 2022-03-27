import "./PicSlider.css";
import '../index.css';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import { useEffect, useState } from "react";
import ImageArray from "./ImageArray";
import NavDots from "./NavDots";



function PicSlider(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [newIndex, setNewIndex] = useState('');
  // const [currentPic, setCurrentPic] = useState('');
  // const [currentDot, setCurrentDot] = useState('');

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
 function dissolve() {
    const slider = document.getElementById("slider");
    slider.classList.add("fade-out");
    setTimeout(function() { hideCurrentPic() }, 1000);
  }
  function appear() {
    const slider = document.getElementById("slider");
    const currentPic = returnCurrentPic();
    slider.classList.remove("fade-out")
    currentPic.classList.remove("hidden");
    slider.classList.add("fade-in");
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

  const handleRightClick = () => {
    if(currentIndex < props.images.length - 1) {
      dissolve();
      setCurrentIndex(currentIndex + 1);
    }
  }

  const handleLeftClick = () => {
    if(currentIndex > 0) {
      dissolve();
      setCurrentIndex(currentIndex - 1);
    }

  }

  //CENTER PICS IF FRAME IS WIDER
  // function centerPic(elem, cont) {
  //   const whiteSpace = cont.scrollWidth - elem.width;
  //   if (whiteSpace > 0) {
  //       elem.style.marginLeft = whiteSpace / 2;
  //   }
  // }
    // setTimeout(() => {
    //     centerPic(props.picArray[currentIndex], container);
    // }, 1000);
  // function hide(element) {
  //   element.classList.remove('fade-out');
  //   element.classList.add('hidden');
  // }
  // function show(elem) {
  //   const slider = document.getElementById("slider");
  //   const container = document.getElementById("pic-frame-inner");
  //   elem.classList.remove('hidden');
  //   setTimeout(() => {
  //       centerPic(slider, container);
  //   }, 250);
  //   slider.classList.add('fade-in');
  // }
  // function dissolve() {
  //   const slider = document.getElementById("slider");

  //   slider.classList.add('fade-out');
  //   setTimeout(function() { hide(slider) }, 1000);
  // }
  // function appear() {
  //   const slider = document.getElementById("slider");
  //   show(slider);
  //   setTimeout(function() { show(slider) }, 1000);
  // }
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
        onClick={handleLeftClick}
        ><ArrowCircleLeftRoundedIcon />
      </button>
      <button 
        className="slider-btn slider-btn-right"
        onClick={handleRightClick}
        ><ArrowCircleRightRoundedIcon />
      </button>
      <div className="pic-frame-inner" id="pic-frame-inner">
        <ImageArray images={props.images} />
      </div>
      <NavDots images={props.images} />
    </div>
  )
}
export default PicSlider;