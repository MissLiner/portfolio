import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ProjectTitle from '../shared/ProjectTitle';
import { projectArray } from "../shared/screenshotArray";
import '../../index.css';
import './ProjectDetail.css';
import ProjectTags from './ProjectTags';

function ProjectDetail(props) {
  return(
    <div className="ProjectDetail">
      <ProjectTitle title={props.title} />
      <button className="ProjectDetail-exit-btn" onClick={props.exitFunc}><CloseRoundedIcon /></button>
      <ProjectTags currentProject={projectArray[props.currentIndex]} />
      <div className="ProjectDetail-links-section">
        <a 
          className="ProjectDetail-link" 
          href={projectArray[props.currentIndex].live}
          target="_blank"
          rel="noreferrer">
            :Live</a>
        <a 
          className="ProjectDetail-link" 
          href={projectArray[props.currentIndex].code}
          target="_blank"
          rel="noreferrer">
            :Git</a>
      </div>
      <p 
        className="ProjectDetail-summary">
          {projectArray[props.currentIndex].summary}</p>
    </div>
  )
}

export default ProjectDetail;