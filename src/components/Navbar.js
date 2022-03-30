import '../index.css';
import '../styles/Navbar.css';

function Navbar(props) {
  const renderNavbar = () => {
    let counter = 0;
    return(
      props.btnList.map(btn => {
        counter += 1
        return(
          <button className={"NavBar-btn " + props.addClasses}
                  onClick={props.clickFunc}
                  value={btn}
                  key={props.navClass + counter}>
                    {props.symbol + btn}
          </button>
        )
      })
    )
  }
  return(
    <div className={"NavBar" + props.addClasses}>
      {renderNavbar()}
    </div>
  )
}
export default Navbar;