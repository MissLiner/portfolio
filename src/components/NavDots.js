import "./PicSlider.css";
import '../index.css';

function NavDots(props) {
  const renderNavDots = () => {
    return(
      props.images.map(i => {
        return(
          <input 
            type="radio" 
            className="nav-dot"
            data-index={i}
            onClick={props.clickFunc}>
          </input>
        )
      })
    )
  }
  return(
    <div id="nav-dot-container">
      {renderNavDots()}
    </div>
  )
}

export default NavDots;