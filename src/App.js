import Canvas from './components/Canvas';
import Navbar from './components/Navbar';
import { activateBtn } from './components/helperFuncs';
import { btnLabels } from './components/text';
import { useEffect, useState } from "react";
import './index.css';

function App() {
  const [view, setView] = useState("home");
  const [canvasView, setCanvasView] = useState("home");
  const [canvasBtns, setCanvasBtns] = useState("");
  const mainBtns = btnLabels.main;
  const [screenClass, setScreenClass] = useState("Canvas screen")


  const handleClickMain = (e) => {
    setView(e.target.value);
    activateBtn(e);
  }
  const handleClickCanvas = (e) => {
    setCanvasView(e.target.value);
    setCanvasBtns(btnLabels[e.target.value]);
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
        <Navbar clickFunc={handleClickMain} 
                navClass="mainNav" 
                btnList={mainBtns}
                symbol=":" />
      </div>
      <div className={screenClass + " Canvas"}>
      {renderCanvasNav()}
      <Canvas mainView={view}
              canvasView={canvasView} />
      </div>
    </div>
  );
}

export default App;
