import "./PicSlider.css";
import '../index.css';

function SVGImg(props) {
  const currentImage = props.images[props.index];
  return(
    <div className={props.compName + " SVGImg container"} id="SVGImg-container" data-index={currentImage}>
      <img 
        src={currentImage[0]} 
        alt={currentImage[1]} 
        className={props.compName + " SVGImg image"}
        id="SVGImg-image"
        data-name={currentImage[3]}
        onClick={props.clickFunc}
        >
      </img>
    </div>
  )
}
export default SVGImg;