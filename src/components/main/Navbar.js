import { useEffect } from 'react';
import '../../index.css';
import './Navbar.css';

function Navbar(props) {
  
  function removeActiveBtn() {
    const navBtns = document.querySelectorAll(".Navbar-btn");
    navBtns.forEach(btn => {
      if(btn.classList.contains("activeBtn")) {
        btn.classList.remove("activeBtn");
      }
    })
  }
  
  function activateBtn(e) {
    const navBtns = document.querySelectorAll(".Navbar-btn");
      removeActiveBtn(navBtns);
    e.target.classList.add("activeBtn");
  }
  useEffect(() => {
    if(props.view === props.clearView) {
      removeActiveBtn();
    }
  })
  const handleClick = (e) => {
    props.clickFunc(e);
    activateBtn(e);
  }
  const renderNavbar = () => {
    return(
      props.btnList.map((btn, i) => {
        return(
          <button className={"Navbar-btn " + props.addClasses}
                  onClick={handleClick}
                  value={btn}
                  key={props.navClass + "-" + i}>
                    {props.symbol + btn}
          </button>
        )
      })
    )
  }
  return(
    <div className={"Navbar " + props.addClasses}>
      {renderNavbar()}
    </div>
  )
}
export default Navbar;