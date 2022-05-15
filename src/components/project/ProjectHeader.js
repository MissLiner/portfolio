import '../../index.scss';
import './ProjectHeader.css';

import ProjectTags from "./ProjectTags";

function ProjectHeader(props) {
  return(
    <div className="ProjectHeader">
      {/* <h3 className="ProjectHeader-title-label label">Mission: </h3> */}
      <h2 className="ProjectHeader-title-content content">
        <span className="text-span">
          {props.title}
        </span>
      </h2>
      {/* <h3 className="ProjectHeader-links-label label">Links: </h3> */}
      <h4 className="ProjectHeader-links-content content">
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
      </h4>

      {/* <h3 className="ProjectHeader-tags-label label">Focus:</h3> */}
      <ProjectTags 
        currentProject={props.currentProject}    
       />
    </div>
  )
}
export default ProjectHeader;
    
    
    
