import '../../index.css';

function ProjectTags(props) {
  const renderTags = () => {
    return(
      props.currentProject.focus.map((item, i) => {
        return(
          <li 
            className={props.parentClass + "-tags-tag"} 
            key={"tag" + i}>
              {item}
          </li>
        )
      })
    )
  }
  return(
    <ul className={props.parentClass + "-tags"}>
      {renderTags()}
    </ul>
  )
}
export default ProjectTags;