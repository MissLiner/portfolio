import "../styles/PicSlider.css";
import '../index.css';

function SVGImg(props) {
  return(
    <div  className={props.compName + " SVGImg-container"} 
          id="SVGImg-container" >
      <img 
        src={props.currentImage[0]} 
        alt={props.currentImage[1]} 
        className={props.compName + " SVGImg-image"}
        id="SVGImg-image"
        data-name={props.currentImage[3]}
        onClick={props.clickFunc}
        >
      </img>
    </div>
  )
}
export default SVGImg;