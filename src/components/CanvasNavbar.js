import '../index.css';

function CanvasNavbar(props) {
  const renderNavbar = () => {
    if(props.btnList) {
      let counter = 0;
      return(
        props.btnList.map(btn => {
          counter += 1;
          return(
            <button className="Canvas CanvasNavbar btn" 
                    key={counter}
                    onClick={props.clickFunc} 
                    value={btn}>
                      .{btn}
            </button>
          )
        })
      )
    } else { 
      return 
    };
   }
  return(
    <div className="Canvas CanvasNavbar main">
      {renderNavbar()}
    </div>
  )
}
export default CanvasNavbar;