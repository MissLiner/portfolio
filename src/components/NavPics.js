import "./PicSlider.css";
import '../index.css';

function NavPics(props) {
  const renderNavPics = () => {
    return(
      props.images.map((image, i) => {
        return(
          <div>
          <label className="nav-label" for={"nav-dot" + i}>
            <input 
              type="radio" 
              className="nav-dot nav-pic"
              data-index={i}
              name={"nav-dot"}
              onClick={props.clickFunc}
              id={"nav-dot" + i}
              key={"nav-dot" + i}
              disabled={props.disabled}
              >
            </input>

              <img className="nav-thumb" src={props.images[i][2]} alt={props.images[i][1]}></img>
              </label>
          </div>

        )
      })
    )
  }
  return(
    <div className="nav-dot-container">
      {renderNavPics()}
    </div>
  )
}

export default NavPics;