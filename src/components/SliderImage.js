import "./PicSlider.css";
import '../index.css';

function SliderImage(props) {
  const currentImage = props.images[props.index];
  return(
    <div className={props.compName + " img-container"} id="img-container" data-index={currentImage}>
      <img 
        src={currentImage[0]} 
        alt={currentImage[1]} 
        className={props.compName + " svg-img"}
        id="svg-img"
        data-name={currentImage[3]}
        onClick={props.clickFunc}
        >
      </img>
    </div>
  )
}
export default SliderImage;