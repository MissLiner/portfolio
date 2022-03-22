import '../index.css';
// import { Link } from "react-router-dom";

function Navbar(props) {
  return(
    <div className="Navbar main">
      <button className="Navbar btn" 
              onClick={props.clickFunc} 
              value="about">
                :about
      </button>
      <button className="Navbar btn" 
              onClick={props.clickFunc}
              value="experience">
                :experience
      </button>
      <button className="Navbar btn" 
              onClick={props.clickFunc}
              value="portfolio">
                :portfolio
      </button>
    </div>
  )
}
export default Navbar;