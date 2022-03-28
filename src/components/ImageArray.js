import "./PicSlider.css";
import '../index.css';

function ImageArray(props) {
  const currentImage = props.images[props.index];
  return(
    <div className="slider" id="slider">
      <img 
        src={currentImage[0]} 
        alt={currentImage[1]} 
        className="slider-pic"
        >
      </img>
    </div>
  )
}
export default ImageArray;