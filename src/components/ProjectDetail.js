import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

function ProjectDetail(props) {
  return(
    <div>
      <button className="exit-project-btn" onClick={props.exitFunc}><CloseRoundedIcon /></button>
    </div>
  )
}

export default ProjectDetail;