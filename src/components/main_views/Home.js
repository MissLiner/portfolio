import '../../index.scss';
import './Home.css';
import { screenContent } from '../shared/text.js';

function Home() {
  return(
    <div className="Home">
      <img 
        className="Home-pic" 
        src={screenContent.home.pic} 
        alt="Caroline Stephenson">
      </img>
      <div className="Home-content">
        <p className="Home-text first">
          <span className="text-span">
            {screenContent.home.text1}
            <a 
              href={screenContent.home.odinLink[1]} 
              target="_blank" rel="noreferrer">
                {screenContent.home.odinLink[0]}
            </a>
            .
          </span>
        </p>
        <p className="Home-text second">
          <span className="text-span">
            {screenContent.home.text2}
            <a 
              href={screenContent.home.gitLink[1]} 
              target="_blank" 
              rel="noreferrer">
                {screenContent.home.gitLink[0]}
            </a>
            .
          </span>
        </p>
        <p className="Home-text third">
          <span className="text-span">
            {screenContent.home.text3}
          </span>
        </p>
      </div>
    </div>
  )
}

export default Home;


