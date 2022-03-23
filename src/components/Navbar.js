import '../index.css';

function Navbar(props) {
  const renderNavbar = () => {
    let counter = 0;
    return(
      props.btnList.map(btn => {
        counter += 1
        return(
          <button className={props.navClass + " btn"}
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
    <div className={props.navClass + " container"}>
      {renderNavbar()}
    </div>
  )
}
export default Navbar;