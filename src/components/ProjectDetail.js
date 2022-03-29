import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ProjectTitle from './ProjectTitle';
import SVGImg from './SVGImg';

function ProjectDetail(props) {
  return(
    <div className="ProjectDetail container">
      <ProjectTitle title={props.title} titleClass="ProjectDetail title" />
      <button className="ProjectDetail exit-btn" onClick={props.exitFunc}><CloseRoundedIcon /></button>
      <SVGImg 
        currentImage={props.images[props.currentIndex]} 
        compName="ProjectDetail" />
    </div>
  )
}

export default ProjectDetail;