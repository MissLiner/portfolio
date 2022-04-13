import '../../index.css';
import './ProjectTags.css';

function ProjectTags(props) {
  const renderTags = () => {
    return(
      props.currentProject.focus.map((item, i) => {
        return(
          <li className="ProjectTags-tag" key={"tag" + i}
          >{item}</li>
        )
      })
    )
  }
  return(
    <ul className="ProjectTags">
      <h3 className="ProjectTags-heading">Skills:</h3>
      <div className="ProjectTags-tag-div">
        {renderTags()}
      </div>
    </ul>
  )
}
export default ProjectTags;