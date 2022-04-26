import '../../index.css';
import './Home.css';
import { screenContent } from '../shared/text.js';

function Home() {
  return(
    <div className="Home">
      <img className="Home-pic" src={screenContent.home.pic} alt="Caroline Stephenson"></img>
      <div className="Home-content">
        <p className="Home-text">{screenContent.home.text1}</p>
        <p className="Home-text">
          {screenContent.home.text2}
          <a href={screenContent.home.gitLink[1]}>
            {screenContent.home.gitLink[0]}
          </a>
        </p>
        <p className="Home-text">{screenContent.home.text3}</p>
      </div>
    </div>
  )
}

export default Home;


