// import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
// import ProjectTitle from '../shared/ProjectTitle';
import { projectArray } from "../shared/screenshotArray";
import '../../index.css';
import './ProjectDetail.css';
import ProjectTags from './ProjectTags';
import ProjectUnits from './ProjectUnits';

function ProjectDetail(props) {
  const currentProject = projectArray[props.currentIndex];
  return(
    <div className="ProjectDetail">
      <h2 className="ProjectDetail-title">{props.title}</h2>
      <ProjectTags currentProject={currentProject} />
      <div className="ProjectDetail-links-section">
        <a 
          className="ProjectDetail-link" 
          href={currentProject.live}
          target="_blank"
          rel="noreferrer">
            :Live</a>
        <a 
          className="ProjectDetail-link" 
          href={currentProject.code}
          target="_blank"
          rel="noreferrer">
            :Git</a>
      </div>
      <p 
        className="ProjectDetail-summary">
          {currentProject.summary}</p>
      <ProjectUnits currentProject={currentProject} />
    </div>
  )
}

export default ProjectDetail;