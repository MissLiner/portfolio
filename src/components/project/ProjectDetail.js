import { projectArray } from "../shared/projectArray";
import '../../index.css';
import './ProjectDetail.css';
import ProjectUnits from './ProjectUnits';
import ProjectSummary from "./ProjectSummary";

function ProjectDetail(props) {
  const currentProject = projectArray[props.currentIndex];
  return(
    <div className="ProjectDetail">
      <ProjectSummary 
        title={currentProject.name} 
        currentProject={currentProject}
       />
      <p 
        className="ProjectDetail-summary">
          {currentProject.summary}
      </p>
      <ProjectUnits currentProject={currentProject}
       />
    </div>
  )
}

export default ProjectDetail;