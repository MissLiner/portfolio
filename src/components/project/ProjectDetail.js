import { projectArray } from "../shared/projectArray";
import '../../index.scss';
import './ProjectDetail.css';
import ProjectUnits from './ProjectUnits';
import ProjectHeader from "./ProjectHeader";

function ProjectDetail(props) {
  const currentProject = projectArray[props.currentIndex];
  const renderUnits = () => {
    if(!currentProject.detailed) {return null};
    return(
      <ProjectUnits currentProject={currentProject} />
    )
  }
  return(
    <div className="ProjectDetail" id="ProjectDetail">
      <ProjectHeader 
        title={currentProject.name} 
        currentProject={currentProject}
       />
      <p 
        className="ProjectDetail-summary">
          {currentProject.summary}
      </p>
      {renderUnits()}
    </div>
  )
}

export default ProjectDetail;