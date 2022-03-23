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
    }
  }, [view]);
  
  const renderCanvasNav = () => {
    if(canvasBtns) {
      return(
        <Navbar clickFunc={handleClickCanvas} 
        navclass="canvasNav"
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
      {renderCanvasNav()}
      <Canvas mainView={view}
              canvasView={canvasView} />
    </div>
  );
}

export default App;
