import '../index.css';

function CanvasNavbar(props) {
  const renderNavbar = () => {
    if(props.btnList) {
      return(
        props.btnList.map(btn => {
          return(
            <button className="CanvasNavbar btn" 
                    onClick={props.clickFunc} 
                    value={btn}>
                      :{btn}
            </button>
          )
        })
      )
    } else { 
      return 
    };
   }
  return(
    <div className="CanvasNavbar main">
      {renderNavbar()}
    </div>
  )
}
export default CanvasNavbar;