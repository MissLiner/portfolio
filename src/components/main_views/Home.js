import '../../index.scss';
import './Home.css';
import { homeContent } from '../shared/text.js';

function Home() {
  return(
    <div className="Home">
      <img 
        className="Home-pic" 
        src={homeContent.pic} 
        alt="Caroline Stephenson">
      </img>
      <div className="Home-content">
        <p className="Home-text first">
          <span className="text-span">
            {homeContent.text1}
            <a 
              href={homeContent.odinLink[1]} 
              target="_blank" rel="noreferrer">
                {homeContent.odinLink[0]}
            </a>
            .
          </span>
        </p>
        <p className="Home-text second">
          <span className="text-span">
            {homeContent.text2}
            <a 
              href={homeContent.gitLink[1]} 
              target="_blank" 
              rel="noreferrer">
                {homeContent.gitLink[0]}
            </a>
            .
          </span>
        </p>
        <p className="Home-text third">
          <span className="text-span">
            {homeContent.text3}
          </span>
        </p>
      </div>
    </div>
  )
}

export default Home;


