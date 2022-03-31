import SVGImg from "../shared/SVGImg";
import "./ProjectUnits.css"
import "../../index.css"

function ProjectUnits(props) {
  const project = props.currentProject;
  const renderUnits = () => {
    return(
      project.units.map((unit, i) => {
        return(
          <div className="ProjectUnits-unit" key={"unit-" + i}>
            <h3 className="ProjectUnits-title">{unit.name}</h3>
            <SVGImg currentImage={unit.image} />
            <p className="ProjectUnits-text">{unit.text}</p>
          </div>
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