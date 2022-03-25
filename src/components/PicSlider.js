import "./PicSlider.css";
import '../index.css';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import { useEffect, useState } from "react";
import ImageArray from "./ImageArray";
import NavDots from "./NavDots";



function PicSlider(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [newIndex, setNewIndex] = useState('');
  const [currentPic, setCurrentPic] = useState('');
  const [currentDot, setCurrentDot] = useState('');

  const slider = document.getElementById("slider");
  const container = document.getElementById("pic-frame-inner");


  const updateCurrentPic = () => {
    const pics = document.getElementsByClassName("slider-pic");
    for(let pic of pics) {
      if(pic.dataset.index === currentIndex) {
        setCurrentPic(pic);
        return;
      }
    }
  }
  const updateCurrentDot = () => {
    const dots = document.getElementsByClassName("nav-dot");
    for(let dot of dots) {
      if(dot.dataset.index === currentIndex) {
        setCurrentDot(dot);
        return;
      }
    }
  }
  // SET STARTING PIC AND DOT ON MOUNT
  useEffect(() => {
    updateCurrentPic();
    updateCurrentDot();
  }, []);

  const handleRightClick = () => {
    setCurrentIndex(currentIndex + 1);
    updateCurrentPic();
    updateCurrentDot();
  }

  const handleLeftClick = () => {
    setCurrentIndex(currentIndex - 1);
    updateCurrentPic();
    updateCurrentDot();
  }

  //CENTER PICS IF FRAME IS WIDER
  function centerPic(slider, container) {
    const whiteSpace = container.scrollWidth - slider.width;
    if (whiteSpace > 0) {
        slider.style.marginLeft = whiteSpace / 2;
    }
  }
    // setTimeout(() => {
    //     centerPic(props.picArray[currentIndex], container);
    // }, 1000);
  function hide(element) {
    element.classList.remove('fade-out');
    element.classList.add('hidden');
  }
  function show(element) {
    const newDot = document.getElementById('nav-dot-' + currentIndex);
    element.classList.remove('hidden');
    setCurrentDot(newDot);
    currentDot.checked = 'true';
    setTimeout(() => {
        centerPic(slider, container);
    }, 250);
    slider.classList.add('fade-in');
  }
  function dissolve() {
    slider.classList.add('fade-out');
    setTimeout(function() { hide(slider) }, 1000);
  }
  function appear() {
    show(slider);
    setTimeout(function() { show(slider) }, 1000);
  }
  function handleDotClick(e) {
    dissolve(currentPic);
    setCurrentIndex(e.target.dataset.index);
    updateCurrentPic();
    appear(currentPic);
  }
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
      <div className="pic-frame-inner">
        <ImageArray images={props.images} />
      </div>
      <NavDots images={props.images} clickFunc={handleDotClick} />
    </div>
  )
}
export default PicSlider;