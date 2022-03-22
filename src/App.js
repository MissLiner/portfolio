import Canvas from './components/Canvas';
import Navbar from './components/Navbar';
import { useState } from "react";
import './index.css';

function App() {
  const [view, setView] = useState("home");
  const navBtns = document.querySelectorAll(".Navbar, .button");
  const selectBtn = (e) => {
    navBtns.forEach(btn => {
      if(btn.classList.contains("activeBtn")) {
        btn.classList.remove("activeBtn");
      }
    })
    e.target.classList.add("activeBtn");
  }
  const handleClick = (e) => {
    setView(e.target.value);
    selectBtn(e);
  }
  return (
    <div>
      <div className="App header">
        <h1>Caroline Stephenson</h1>
        <Navbar clickFunc={handleClick} view={view} />
      </div>
      <Canvas view={view} />
    </div>
  );
}

export default App;
