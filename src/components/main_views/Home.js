import '../../index.scss';
import './Home.css';
import { homeContent } from '../shared/text.js';

function Home() {
  return(
    <div className="Home">
      <div className="Home-content">
        <h1 className="Home-header">Welcome!</h1>
        <p className="Home-text first">
            {homeContent.text1}
            <a 
              href={homeContent.odinLink[1]} 
              target="_blank" rel="noreferrer">
                {homeContent.odinLink[0]}
            </a>
            .
        </p>
        <p className="Home-text second">
            {homeContent.text2}
            <a 
              className="pinkLink"
              href={homeContent.gitLink[1]} 
              target="_blank" 
              rel="noreferrer">
                {homeContent.gitLink[0]}
            </a>
            .
        </p>
        <p className="Home-text third">
            {homeContent.text3}
        </p>
        <p className="Home-text fourth">
            {homeContent.text4}
        </p>
      </div>
      <div className="Home-footer">
          <h1 className="Home-sig">-Caroline</h1>
          <img 
            className="Home-pic" 
            src={homeContent.pic} 
            alt="Caroline Stephenson">
          </img>
        </div>
    </div>
  )
}

export default Home;


