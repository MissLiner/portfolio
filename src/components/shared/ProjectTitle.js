import '../index.css';
import '../styles/ProjectTitle.css';

function ProjectTitle(props) {
  return(
    <h2 className="ProjectTitle">{props.title}</h2>
  )
}

export default ProjectTitle;