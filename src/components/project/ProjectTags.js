import '../../index.scss';
import './ProjectTags.css';

function ProjectTags(props) {
  const renderTags = () => {
    return(
      props.currentProject.focus.map((item, i) => {
        return(
          <li 
            className="ProjectTags-tag"
            key={"tag" + i}>
              {item}
          </li>
        )
      })
    )
  }

  return(
    <ul className={"ProjectTags content"}>
      {renderTags()}
    </ul>
  )
}

export default ProjectTags;