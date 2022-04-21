import '../../index.css';
import './StickyNav.css';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import IconButton from '@mui/material/IconButton';

function StickyNav(props) {
  return(
    <div className="StickyNav colors-nav-sticky">
      <IconButton aria-label="home" onClick={props.homeFunc}>
        <HomeRoundedIcon style={{ color: "rgb(255, 251, 252)" }}/>
      </IconButton>
      <IconButton aria-label="email" onClick={props.emailFunc}>
        <EmailRoundedIcon style={{ color: "rgb(255, 251, 252)" }}/>
      </IconButton>
    </div>

  )
}
export default StickyNav;