import "PicSlider.css";
import { useEffect, useState } from "react";
import ImageArray from "./ImageArray";
import FSRestImg from '/Users/Caroline/myprojects/portfolio/src/images/screenshots/screengallery/FS_restaurant.svg';
import TNRestImg from '/Users/Caroline/myprojects/portfolio/src/images/screenshots/screengallery/TN_restaurant.svg';
import FSBattleImg from '/Users/Caroline/myprojects/portfolio/src/images/screenshots/screengallery/FS_battleship.svg';
import TNBattleImg from '/Users/Caroline/myprojects/portfolio/src/images/screenshots/screengallery/TN_battleship.svg';
import FSCalcImg from '/Users/Caroline/myprojects/portfolio/src/images/screenshots/screengallery/FS_calculator.svg';
import TNCalcImg from '/Users/Caroline/myprojects/portfolio/src/images/screenshots/screengallery/TN_calculator.svg';
import NavDots from "./NavDots";

function PicSlider(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [newIndex, setNewIndex] = useState('');
  const [currentPic, setCurrentPic] = useState('');
  const [currentDot, setCurrentDot] = useState('');

  const slider = document.getElementById("slider");
  const container = document.getElementById("pic-frame-inner");
  const images = {
    image1: [ FSRestImg, "restaurant site screenshot" ],
    image2: [ FSBattleImg, "battleship site screenshot" ],
    image3: [ FSCalcImg, "calculator site screenshot"],
  }

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
    <div id="pic-frame-outer">
      <div id="pic-frame-inner">
        <ImageArray images={images} />
      </div>
      <div id="slider-btn-div">
        <button 
          id="slider-btn-left" 
          class="slider-btn" 
          onClick={handleLeftClick}
          >&lt;
        </button>
        <button id="play-btn">PLAY</button>
        <button 
          id="slider-btn-right" 
          class="slider-btn"
          onClick={handleRightClick}
          >&gt;
        </button>
      </div>
      <NavDots images={images} clickFunc={handleDotClick} />
    </div>
  )
}
export default PicSlider;