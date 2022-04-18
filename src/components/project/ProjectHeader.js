import '../../index.css';
import './ProjectHeader.css';

import ProjectTags from "./ProjectTags";

function ProjectHeader(props) {
  return(
    <div className="ProjectHeader">
      <h3 className="ProjectHeader-title-label label">Mission: </h3>
      <div className="ProjectHeader-title-content content">{props.title}</div>
      <h3 className="ProjectHeader-links-label label">Links: </h3>
      <div className="ProjectHeader-links-content content">
        <a  className="ProjectHeader-links-link" 
            href={props.currentProject.live}
            target="_blank"
            rel="noreferrer">
              Live
        </a>
        <a  className="ProjectHeader-links-link" 
            href={props.currentProject.code}
            target="_blank"
            rel="noreferrer">
              Git
        </a>
      </div>

      <h3 className="ProjectHeader-tags-label label">Focus:</h3>
      <ProjectTags 
        currentProject={props.currentProject}    
        parentClass="ProjectHeader"
       />
    </div>
  )
}
export default ProjectHeader;
    
    
    
