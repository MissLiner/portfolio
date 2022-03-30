import Canvas from './components/Canvas';
import Navbar from './components/Navbar';
import { removeAllActive, activateBtn } from './components/helperFuncs';
import { btnLabels } from './components/text';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import IconButton from '@mui/material/IconButton';
import { useState } from "react";
import './index.css';
import './styles/App.css';

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
  const handleClickMain = (e) => {
    setView(e.target.value);
    activateBtn(e);
  }

  return (
    <div>
      <div className="App header">
        <h1 className="App name">Caroline Stephenson</h1>
        <IconButton aria-label="home" onClick={handleClickHome}>
          <HomeRoundedIcon style={{ color: "rgb(255, 251, 252)" }}/>
        </IconButton>
        <IconButton aria-label="email" onClick={handleClickEmail}>
          <EmailRoundedIcon style={{ color: "rgb(255, 251, 252)" }}/>
        </IconButton>

        <Navbar clickFunc={handleClickMain} 
                addClasses="main" 
                btnList={mainBtns}
                symbol=":" />
      </div>
      {/* <div className={screenClass}> */}
      <Canvas mainView={view} />
      </div>
      // </div>
  );
}

export default App;
