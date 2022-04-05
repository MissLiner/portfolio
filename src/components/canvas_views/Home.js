import '../../index.css';
import './Home.css';
import { screenContent } from '../shared/text.js';

function Home() {
  return(
    <div className="Home">
      <q className="Home-quote">{screenContent.home.quote}</q>
      <h3 className="Home-author">{screenContent.home.author + ", "}
        <i className="Home-source">{screenContent.home.source}</i>
      </h3>
    </div>
  )
}

// main div had Canvas and content classes
export default Home;
