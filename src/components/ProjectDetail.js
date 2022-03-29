import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ProjectTitle from './ProjectTitle';

function ProjectDetail(props) {
  return(
    <div className="ProjectDetail container">
      <ProjectTitle title={props.title} />
      <button className="ProjectDetail exit-btn" onClick={props.exitFunc}><CloseRoundedIcon /></button>
    </div>
  )
}

export default ProjectDetail;