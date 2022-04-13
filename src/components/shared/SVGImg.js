import "./SVGImg.css";
import '../../index.css';

function SVGImg(props) {
  return(
    <div  className="SVGImg" 
          id="SVGImg" >
      <img 
        src={props.currentImage[0]} 
        alt={props.currentImage[1]} 
        className={"SVGImg-image" + props.parentClass}
        id="SVGImg-image"
        data-name={props.currentImage[3]}
        onClick={props.clickFunc}
        >
      </img>
    </div>
  )
}
export default SVGImg;