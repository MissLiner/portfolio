import '../index.css';

function ProjectDetailTags(props) {
  const renderTags = () => {
    return(
      props.currentProject.focus.map(item => {
        return(
          <li className={props.compName + " focus-list-item"}>{item}</li>
        )
      })
    )
  }
  return(
    <ul className={props.compName + " focus-list"}>
      {renderTags()}
    </ul>
  )
}
export default ProjectDetailTags;