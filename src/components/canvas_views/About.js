import '../../index.css';
import './About.css';
import { screenContent } from "../shared/text"

function About(props) {
  <div className="About">
    <p className="About-text">{screenContent.about[props.canvasView]}</p>
  </div>
}
export default About;