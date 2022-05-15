import { useEffect } from 'react';
import '../../index.scss';
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
          <button className={"Navbar-btn colors-Navbar"}
                  onClick={handleClick}
                  value={btn}
                  key={props.navClass + "-" + i}
          >
            {btn}
          </button>
        )
      })
    )
  }
  return(
    <div className={"Navbar colors-Navbar"}>
      {renderNavbar()}
    </div>
  )
}
export default Navbar;