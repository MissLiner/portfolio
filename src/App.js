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


  const handleClickMain = (e) => {
    setView(e.target.value);
    activateBtn(e);
  }
  const handleClickCanvas = (e) => {
    setCanvasView(e.target.value);
    setCanvasBtns(btnLabels[e.target.value]);
    activateBtn(e);
  }

  return (
    <div>
      <div className="App header">
        <h1>Caroline Stephenson</h1>
        <Navbar clickFunc={handleClickMain} 
                navClass="mainNav" 
                btnList={ btnLabels.main}/>
      </div>
      <Navbar clickFunc={handleClickCanvas} 
              navclass="canvasNav"
              btnList={canvasBtns} />
      <Canvas mainView={view}
              canvasView={canvasView} />
    </div>
  );
}

export default App;
