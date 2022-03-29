import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ProjectTitle from './ProjectTitle';

function ProjectDetail(props) {
  return(
    <div>
      <ProjectTitle title={props.title} />
      <button className="exit-project-btn" onClick={props.exitFunc}><CloseRoundedIcon /></button>
    </div>
  )
}

export default ProjectDetail;