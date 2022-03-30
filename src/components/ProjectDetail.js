import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ProjectTitle from './ProjectTitle';
import SVGImg from './SVGImg';
import { projectArray } from "./screenshotArray";
import '../index.css';
import '../styles/ProjectDetail.css';
import ProjectDetailTags from './ProjectDetailTags';

function ProjectDetail(props) {
  return(
    <div className="ProjectDetail container">
      <ProjectTitle title={props.title} />
      <button className="ProjectDetail exit-btn" onClick={props.exitFunc}><CloseRoundedIcon /></button>
      <SVGImg 
        currentImage={props.images[props.currentIndex]} 
        compName="ProjectDetail" />
      <ProjectDetailTags currentProject={projectArray[props.currentIndex]} />
    </div>
  )
}

export default ProjectDetail;