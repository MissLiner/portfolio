import '../../index.scss';
import './ProjectHeader.css';

import ProjectTags from "./ProjectTags";

function ProjectHeader(props) {
  return(
    <div className="ProjectHeader">
      <h1 className="ProjectHeader-title">
        <span className="text-span">
          {props.title}
        </span>
      </h1>
      <h4 className="ProjectHeader-links">
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

      <ProjectTags 
        currentProject={props.currentProject}    
       />
    </div>
  )
}
export default ProjectHeader;
    
    
    
