import Canvas from './Canvas';
import Navbar from './Navbar';
import StickyNav from './StickyNav';
import { navLabels } from '../shared/text';
import { useState } from "react";
import '../../index.css';
import './App.css';

function App() {
  const [view, setView] = useState("home");

  const handleClickHome = () => {
    setView("home");
  }
  const handleClickEmail = () => {
    alert("Email");
  }
  const handleClickNav = (e) => {
    setView(e.target.value);
  }

  return (
    <div className="App">
      <StickyNav homeFunc={handleClickHome} emailFunc={handleClickEmail} />
      <div className="App-header colors-primary">
        <h1 className="App-name">Caroline Stephenson</h1>
        <Navbar clickFunc={handleClickNav} 
                btnList={navLabels}
                clearView="home"
                view={view}
                symbol=":" />
      </div>
      <Canvas mainView={view} />
    </div>
  );
}

export default App;
