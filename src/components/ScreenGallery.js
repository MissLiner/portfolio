import ImageGallery from 'react-image-gallery';
import FSRestImg from '/Users/Caroline/myprojects/portfolio/src/images/screenshots/screengallery/FS_restaurant.svg';
import TNRestImg from '/Users/Caroline/myprojects/portfolio/src/images/screenshots/screengallery/TN_restaurant.svg';
import FSBattleImg from '/Users/Caroline/myprojects/portfolio/src/images/screenshots/screengallery/FS_battleship.svg';
import TNBattleImg from '/Users/Caroline/myprojects/portfolio/src/images/screenshots/screengallery/TN_battleship.svg';
import FSCalcImg from '/Users/Caroline/myprojects/portfolio/src/images/screenshots/screengallery/FS_calculator.svg';
import TNCalcImg from '/Users/Caroline/myprojects/portfolio/src/images/screenshots/screengallery/TN_calculator.svg';


const images = [
  {
    original: FSRestImg,
    thumbnail: TNRestImg,
    thumbnailClass: "thumbnail",
  },
  {
    original: FSBattleImg,
    thumbnail: TNBattleImg,
    thumbnailClass: "thumbnail",
  },
  {
    original: FSCalcImg,
    thumbnail: TNCalcImg,
    thumbnailClass: "thumbnail",
  },
];

function ScreenGallery() {
    return <ImageGallery items={images} thumbnailPosition="bottom" />;
}
export default ScreenGallery;