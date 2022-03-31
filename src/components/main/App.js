import Canvas from './Canvas';
import Navbar from './Navbar';
import { removeAllActive, activateBtn } from '../shared/helperFuncs';
import { btnLabels } from '../shared/text';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import IconButton from '@mui/material/IconButton';
import { useState } from "react";
import '../../index.css';
import './App.css';

function App() {
  const [view, setView] = useState("home");
  const mainBtns = btnLabels.main;

  const handleClickHome = () => {
    setView("home");
    removeAllActive();
  }
  const handleClickEmail = () => {
    alert("Email");
  }
  const handleClickNav = (e) => {
    setView(e.target.value);
    removeAllActive();
    activateBtn(e);
  }

  return (
    <div className="App">
      <div className="App-header">
        <h1 className="App-name">Caroline Stephenson</h1>
        <IconButton aria-label="home" onClick={handleClickHome}>
          <HomeRoundedIcon style={{ color: "rgb(255, 251, 252)" }}/>
        </IconButton>
        <IconButton aria-label="email" onClick={handleClickEmail}>
          <EmailRoundedIcon style={{ color: "rgb(255, 251, 252)" }}/>
        </IconButton>

        <Navbar clickFunc={handleClickNav} 
                addClasses="main" 
                btnList={mainBtns}
                symbol=":" />
      </div>
      <Canvas mainView={view} />
    </div>
  );
}

export default App;
