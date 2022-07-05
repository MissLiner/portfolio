// import { Link } from "react-router-dom";

import '../../index.scss';
import './StickyNav.css';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import IconButton from '@mui/material/IconButton';

function StickyNav(props) {
  return(
    <div className="StickyNav colors-StickyNav">
      {/* <Link to="/"> */}
        <IconButton 
          className="StickNav-btn-home" 
          aria-label="home" 
          onClick={props.homeFunc}>
          <HomeRoundedIcon 
            className="StickyNav-icon" 
            style={{ color: "white" }}
          />
        </IconButton>
      {/* </Link> */}
      <IconButton 
        className="StickyNav-btn-email" 
        aria-label="email" 
        onClick={props.emailFunc}>
        <EmailRoundedIcon 
          className="StickyNav-icon" 
          style={{ color: "white" }}
        />
      </IconButton>
    </div>

  )
}
export default StickyNav;