import '../../index.css';
import './ProjectSummary.css';

import ProjectTags from "./ProjectTags";

function ProjectSummary(props) {
  return(
    <div className="ProjectSummary">
      <div className="ProjectSummary-title">
        <h3 className="ProjectSummary-title-label">Mission: </h3>
        <div className="ProjectSummary-title-content">{props.title}</div>
      </div>
      <ProjectTags currentProject={props.currentProject} />
      <div className="ProjectSummary-links">
        <a 
          className="ProjectSummary-links-link" 
          href={props.currentProject.live}
          target="_blank"
          rel="noreferrer">
            Live</a>
        <a 
          className="ProjectSummary-links-link" 
          href={props.currentProject.code}
          target="_blank"
          rel="noreferrer">
            Git</a>
      </div>
    </div>
  )
}
export default ProjectSummary;
    
    
    
