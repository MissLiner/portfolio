import "PicSlider.css";
import { useState } from "react";

function PicSlider(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [newIndex, setNewIndex] = useState('');
  const [currentDot, setCurrentDot] = useState('');

  const slider = document.getElementById("slider");
  const container = document.getElementById("pic-frame-inner");

  const addIndex = () => {
    setCurrentIndex(pIndex += 1);
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
}
export default PicSlider;