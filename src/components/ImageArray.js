import FSRestImg from '/Users/Caroline/myprojects/portfolio/src/images/screenshots/screengallery/FS_restaurant.svg';
import TNRestImg from '/Users/Caroline/myprojects/portfolio/src/images/screenshots/screengallery/TN_restaurant.svg';
import FSBattleImg from '/Users/Caroline/myprojects/portfolio/src/images/screenshots/screengallery/FS_battleship.svg';
import TNBattleImg from '/Users/Caroline/myprojects/portfolio/src/images/screenshots/screengallery/TN_battleship.svg';
import FSCalcImg from '/Users/Caroline/myprojects/portfolio/src/images/screenshots/screengallery/FS_calculator.svg';
import TNCalcImg from '/Users/Caroline/myprojects/portfolio/src/images/screenshots/screengallery/TN_calculator.svg';

function ImageArray(props) {

  const renderImages = () => {
    return(
      props.images.map((image, i) => {
        return(
          <img 
            source={image[0]} 
            alt={image[1]} 
            className="slider-pic hidden"
            data-index={i}>
          </img>
        )
      })
    )
  }
  return(
    <div id="slider">
      {renderImages()}
    </div>
  )
}
export default ImageArray;