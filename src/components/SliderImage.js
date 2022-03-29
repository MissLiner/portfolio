import "./PicSlider.css";
import '../index.css';

function SliderImage(props) {
  const currentImage = props.images[props.index];
  return(
    <div className="pic-frame-inner" id="pic-frame-inner" data-index={currentImage}>
      <img 
        src={currentImage[0]} 
        alt={currentImage[1]} 
        className="slider-pic"
        id="slider-pic"
        data-name={currentImage[3]}
        onClick={props.clickFunc}
        >
      </img>
    </div>
  )
}
export default SliderImage;