import Canvas from './components/Canvas';
import Navbar from './components/Navbar';
import { activateBtn } from './components/helperFuncs';
import { btnLabels } from './components/text';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
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
    if(view !== "home") {
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
        <Navbar clickFunc={handleClickCanvas} 
        navClass="canvasNav Canvas"
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
        <h1>Caroline Stephenson</h1>
        <IconButton aria-label="home" className="homeBtn" onClick={handleClickHome}>
          <HomeRoundedIcon />
        </IconButton>

        <Navbar clickFunc={handleClickMain} 
                navClass="mainNav" 
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
