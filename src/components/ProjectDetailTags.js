import '../index.css';

function ProjectDetailTags(props) {
  const renderTags = () => {
    return(
      props.currentProject.focus.map(item => {
        return(
          <li className="ProjectDetailTags focus-list-item">{item}</li>
        )
      })
    )
  }
  return(
    <ul className="ProjectDetailTags focus-list">
      {renderTags()}
    </ul>
  )
}
export default ProjectDetailTags;