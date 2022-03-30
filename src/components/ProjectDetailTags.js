import '../index.css';
import '../styles/ProjectDetailTags.css';

function ProjectDetailTags(props) {
  const renderTags = () => {
    return(
      props.currentProject.focus.map(item => {
        return(
          <li className="ProjectDetailTags-list-item">{item}</li>
        )
      })
    )
  }
  return(
    <ul className="ProjectDetailTags">
      {renderTags()}
    </ul>
  )
}
export default ProjectDetailTags;