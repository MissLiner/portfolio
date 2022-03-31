import '../../index.css';
import './Navbar.css';

function Navbar(props) {
  const renderNavbar = () => {
    return(
      props.btnList.map((btn, i) => {
        return(
          <button className={"NavBar-btn " + props.addClasses}
                  onClick={props.clickFunc}
                  value={btn}
                  key={props.navClass + "-" + i}>
                    {props.symbol + btn}
          </button>
        )
      })
    )
  }
  return(
    <div className={"NavBar " + props.addClasses}>
      {renderNavbar()}
    </div>
  )
}
export default Navbar;