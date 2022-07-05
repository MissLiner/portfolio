import SVGImg from "../shared/SVGImg";
import "./ProjectUnits.css"
import "../../index.scss"

function ProjectUnits(props) {
  const project = props.currentProject;
  const renderLink = (obj) => {
    if(!obj.link) {return null};
    return(
      <span className="ProjectUnits-text2">
        <a 
          className="ProjectUnits-link pinkLink"
          href={obj.link[1]}
            >{obj.link[0]}
        </a>
        {obj.text2}
      </span>
    )
  }

  const leftUnit = (obj, keyNum) => {
    return(
      <div className="ProjectUnits-unit left" key={"unit-" + keyNum}>
        <h4 className="ProjectUnits-title">
          {obj.name}
        </h4>
        <SVGImg currentImage={obj.image} />
        <p className="ProjectUnits-text left">{obj.text}{renderLink(obj)}</p>
      </div>
    )
  }
  const rightUnit = (obj, keyNum) => {
    return(
      <div className="ProjectUnits-unit right" key={"unit-" + keyNum}>
        <h4 className="ProjectUnits-title">
          {obj.name}
        </h4>
      <SVGImg currentImage={obj.image} />
      <p className="ProjectUnits-text right">{obj.text}{renderLink(obj)}</p>
    </div>
    )
  }
  const renderUnits = () => {
    return(
      project.units.map((unit, i) => {
        return(
          i % 2 === 0 ?  
            leftUnit(unit, i) : rightUnit(unit, i)
        )
      })
    )
  }
  return(
    <div className="ProjectUnits">
      {renderUnits()}
    </div>
  )
}
export default ProjectUnits;