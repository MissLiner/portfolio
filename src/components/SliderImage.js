import "./PicSlider.css";
import '../index.css';

function SliderImage(props) {
  const currentImage = props.images[props.index];
  return(
      <img 
        src={currentImage[0]} 
        alt={currentImage[1]} 
        className="slider-pic"
        id="slider-pic"
        >
      </img>
  )
}
export default SliderImage;