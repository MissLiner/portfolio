import Canvas from './Canvas';
import Navbar from './Navbar';
import StickyNav from './StickyNav';
import ContactForm from './ContactForm';
import { navLabels } from '../shared/text';
import { useEffect, useState } from "react";
import '../../index.scss';
import './App.css';

function App() {
  const [view, setView] = useState("home");
  const [showContact, setShowContact] = useState(false);
  const [filter, setFilter] = useState("");

  const handleClickHome = () => {
    setView("home");
  }
  const handleClickEmail = () => {
    setShowContact(true);
    setFilter("App-filter");
  }
  const handleClickNav = (e) => {
    setView(e.target.value);
  }
  const hideContact = () => {
    setShowContact(false);
    setFilter("");
  }

  const renderContactForm = () => {
    if(showContact) {
      return(
        <ContactForm submitFunc={hideContact} cancelFunc={hideContact} />
      )
    } else {
      return null;
    }
  }
  useEffect(() => {
    const handleClickOut = (e) => {
      if(e.target.className === "ContactForm-blocker")
      hideContact();
    }
      if(filter === "App-filter") {
        window.addEventListener('click', handleClickOut);
      } else {
        window.removeEventListener('click', handleClickOut);
      }
      return () => window.removeEventListener('click', handleClickOut);
    }, [filter, setFilter]);

  return (
    <div className="App">
      <div className={filter + " App-screen"} >
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
        </div>
      {renderContactForm()}
    </div>
  );
}

export default App;
