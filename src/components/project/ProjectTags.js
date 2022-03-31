import '../../index.css';
import './ProjectTags.css';

function ProjectTags(props) {
  const renderTags = () => {
    return(
      props.currentProject.focus.map(item => {
        return(
          <li className="ProjectTags-list-item">{item}</li>
        )
      })
    )
  }
  return(
    <ul className="ProjectTags">
      {renderTags()}
    </ul>
  )
}
export default ProjectTags;