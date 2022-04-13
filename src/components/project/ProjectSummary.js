import '../../index.css';
import './ProjectSummary.css';

import ProjectTags from "./ProjectTags";

function ProjectSummary(props) {
  return(
    <div className="ProjectSummary">
      <h3 className="ProjectSummary-title-label">Mission: </h3>
      <div className="ProjectSummary-title-content">{props.title}</div>
      <h3 className="ProjectSummary-links-label">Links: </h3>
      <div className="ProjectSummary-links-content">
        <a  className="ProjectSummary-links-link" 
            href={props.currentProject.live}
            target="_blank"
            rel="noreferrer">
              Live
        </a>
        <a  className="ProjectSummary-links-link" 
            href={props.currentProject.code}
            target="_blank"
            rel="noreferrer">
              Git
        </a>
      </div>

      <h3 className="ProjectSummary-tags-label">Skills:</h3>
      <ProjectTags 
        currentProject={props.currentProject}    
        parentClass="ProjectSummary"
       />
    </div>
  )
}
export default ProjectSummary;
    
    
    
