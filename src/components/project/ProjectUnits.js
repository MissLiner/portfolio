import SVGImg from "../shared/SVGImg";

function ProjectUnits(props) {
  const project = props.currentProject;
  const renderUnits = () => {
    project.units.map(unit => {
      return(
        <div className="ProjectUnits-unit">
          <h3 className="ProjectUnits-title">{unit.name}</h3>
          <SVGImg currentImage={unit.image} />
          <p>{unit.text}</p>
        </div>
      )
    })
  }
  return(
    <div className="ProjectUnits">
      {renderUnits()}
    </div>
  )
}
export default ProjectUnits;