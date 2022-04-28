import Canvas from './Canvas';
import Navbar from './Navbar';
import StickyNav from './StickyNav';
import ContactForm from './ContactForm';
import { navLabels } from '../shared/text';
import { useState } from "react";
import '../../index.css';
import './App.css';

function App() {
  const [view, setView] = useState("home");
  const [showContact, setShowContact] = useState(false);

  const handleClickHome = () => {
    setView("home");
  }
  const handleClickEmail = () => {
    setShowContact(true);
  }
  const handleClickNav = (e) => {
    setView(e.target.value);
  }

  const renderContactForm = () => {
    if(showContact) {
      return(< ContactForm />)
    } else {
      return null;
    }
  }

  return (
    <div className="App">
      <StickyNav 
        homeFunc={handleClickHome} 
        emailFunc={handleClickEmail} 
      />
      <div className="App-header colors-primary">
        <h1 className="App-name">Caroline Stephenson</h1>
        <Navbar 
          clickFunc={handleClickNav} 
          btnList={navLabels}
          clearView="home"
          view={view}
         />
      </div>
      <Canvas mainView={view} />
      {renderContactForm()}
    </div>
  );
}

export default App;
