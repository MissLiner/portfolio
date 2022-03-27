import "./PicSlider.css";
import '../index.css';

function ImageArray(props) {

  const renderImages = () => {
    return(
      props.images.map((image, i) => {
        return(
          <img 
            source={image[0]} 
            alt={image[1]} 
            className="slider-pic hidden"
            data-index={i}
            key={"slider-pic" + i}>
          </img>
        )
      })
    )
  }
  return(
    <div className="slider" id="slider">
      {renderImages()}
    </div>
  )
}
export default ImageArray;