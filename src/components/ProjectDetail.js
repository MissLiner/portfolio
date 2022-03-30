import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ProjectTitle from './ProjectTitle';
import SVGImg from './SVGImg';
import { projectArray } from "./screenshotArray";
import '../index.css';
import '../styles/ProjectDetail.css';
import ProjectDetailTags from './ProjectDetailTags';

function ProjectDetail(props) {
  return(
    <div className="ProjectDetail">
      <ProjectTitle title={props.title} />
      <button className="ProjectDetail-exit-btn" onClick={props.exitFunc}><CloseRoundedIcon /></button>
      <SVGImg 
        currentImage={props.images[props.currentIndex]} 
        compName="ProjectDetail" />
      <ProjectDetailTags currentProject={projectArray[props.currentIndex]} />
      <div className="ProjectDetail-links-section">
        <a href={projectArray[props.currentIndex].live}>Live site</a>
        <a href={projectArray[props.currentIndex].code}>Git repo</a>
      </div>
    </div>
  )
}

export default ProjectDetail;