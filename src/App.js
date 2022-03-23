import Canvas from './components/Canvas';
import Navbar from './components/Navbar';
import { activateBtn } from './components/helperFuncs'
import { useState } from "react";
import './index.css';

function App() {
  const [view, setView] = useState("home");
  const [ canvasView, setCanvasView ] = useState("home");

  const handleClickMain = (e) => {
    setView(e.target.value);
    activateBtn(e);
  }
  const handleClickCanvas = (e) => {
    updateBtnList();
    activateBtn(e);
    setCanvasView(e.target.value);
  }
  return (
    <div>
      <div className="App header">
        <h1>Caroline Stephenson</h1>
        <Navbar clickFunc={handleClickMain} navClass="mainNav" />
      </div>
      <Canvas view={view} />
    </div>
  );
}

export default App;
