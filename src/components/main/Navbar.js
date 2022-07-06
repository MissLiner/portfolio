import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../index.scss';
import './Navbar.css';

function Navbar(props) {
  const [activeBtn, setActiveBtn] = useState({
    current: null,
    buttons: [{id: "projects"}, {id: "skills"}, {id: "about"}]
  });

  function toggleActive(index) {
    setActiveBtn({...activeBtn, current: activeBtn.buttons[index]});
  }
  
  useEffect(() => {
    if(props.view === props.clearView) {
      setActiveBtn({...activeBtn, current: null})
    }
  }, [props.view, props.clearView])

  const status = (index) => {
    if(activeBtn.current === activeBtn.buttons[index]) {
      return "Navbar-btn colors-Navbar active"
    } else {
      return "Navbar-btn colors-Navbar inactive"
    }
  }
  const navigate = useNavigate();
  const handleClick = (e) => {
    props.clickFunc(e);
    toggleActive(e.target.value);
    navigate("/portfolio/" + e.target.id);
  }

  return(
    <div className={"Navbar"}>
      {activeBtn.buttons.map((btn, i) => {
        return(
            <button className={status(i)}
              onClick={handleClick}
              value={i}
              id={btn.id}
              key={i}
            >{btn.id}
            </button>
        )
      })}
    </div>
  )
}
export default Navbar;