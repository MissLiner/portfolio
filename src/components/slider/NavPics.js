import "./NavPics.css";
import '../../index.css';

function NavPics(props) {
  const renderNavPics = () => {
    return(
      props.projects.map((project, i) => {
        return(
          <div key={"NavPics-div" + i}>
            <label 
              className="NavPics-label" 
              htmlFor={"NavPics-input" + i} >
              <input 
                type="radio" 
                className="NavPics-input"
                data-index={i}
                name={"NavPics-input"}
                onClick={props.clickFunc}
                id={"NavPics-input" + i}
                disabled={props.disabled}>
              </input>
              <img 
                className="NavPics-thumb" 
                src={project.sliderRefs[2]} 
                alt={project.sliderRefs[1]}>
              </img>
            </label>
          </div>

        )
      })
    )
  }
  return(
    <div className="NavPics">
      {renderNavPics()}
    </div>
  )
}

export default NavPics;