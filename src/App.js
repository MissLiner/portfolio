import Canvas from './components/Canvas';
import Navbar from './components/Navbar';
import { removeAllActive, activateBtn } from './components/helperFuncs';
import { btnLabels } from './components/text';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import IconButton from '@mui/material/IconButton';
import { useEffect, useState } from "react";
import './index.css';

function App() {
  const [view, setView] = useState("home");
  const [canvasView, setCanvasView] = useState("home");
  const [canvasBtns, setCanvasBtns] = useState("");
  const mainBtns = btnLabels.main;
  const [screenClass, setScreenClass] = useState("Canvas screen")

  const handleClickHome = () => {
    setView("home");
    setCanvasView("home");
    removeAllActive();
  }
  const handleClickEmail = () => {
    alert("Email");
  }
  const handleClickMain = (e) => {
    setView(e.target.value);
    activateBtn(e);
  }
  const handleClickCanvas = (e) => {
    setCanvasView(e.target.value);
    activateBtn(e);
  }
  useEffect(() => {
    if(view !== "home" && view !== "portfolio") {
      setCanvasBtns(btnLabels[view]);
      setScreenClass("Canvas screen menu");
    } else {
      setCanvasBtns("");
      setScreenClass("Canvas screen");
    }
  }, [view]);

  const renderCanvasNav = () => {
    if(canvasBtns) {
      return(
        <Navbar 
          clickFunc={handleClickCanvas}
          addClasses="side"
          btnList={canvasBtns}
          symbol="." />
      )
    } else {
      return null;
    }
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
      <div className={screenClass}>
      {renderCanvasNav()}
      <Canvas mainView={view}
              canvasView={canvasView} />
      </div>
      </div>
  );
}

export default App;
