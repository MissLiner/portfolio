import "./PicSlider.css";
import '../index.scss';

function NavDots(props) {
  const renderNavDots = () => {
    return(
      props.images.map((image, i) => {
        return(
          <input 
            type="radio" 
            className="nav-dot"
            data-index={i}
            name="nav-dot"
            onClick={props.clickFunc}
            key={"nav-dot" + i}
            disabled={props.disabled}
            >
          </input>
        )
      })
    )
  }
  return(
    <div className="nav-dot-container">
      {renderNavDots()}
    </div>
  )
}

export default NavDots;