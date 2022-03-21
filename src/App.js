import Canvas from './components/Canvas';
import Navbar from './components/Navbar';
import { useState } from "react";
import './index.css';

function App() {
  const [view, setView] = useState("home");
  const handleClick = (e) => {
    setView(e.target.textcontent);
  }
  return (
    <div>
      <div className="App header">
        <h1>Caroline Stephenson</h1>
        <Navbar clickFunc={handleClick} />
      </div>
      <Canvas view={view} />
    </div>
  );
}

export default App;
