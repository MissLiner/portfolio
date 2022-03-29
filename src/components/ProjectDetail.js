import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ProjectTitle from './ProjectTitle';
import SliderImage from './SliderImage';

function ProjectDetail(props) {
  return(
    <div className="ProjectDetail container">
      <ProjectTitle title={props.title} titleClass="ProjectDetail title" />
      <button className="ProjectDetail exit-btn" onClick={props.exitFunc}><CloseRoundedIcon /></button>
      <SliderImage images={props.images} currentIndex={props.currentIndex} imageClass="ProjectDetail main-img" />
    </div>
  )
}

export default ProjectDetail;