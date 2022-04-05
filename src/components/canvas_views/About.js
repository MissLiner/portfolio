import '../../index.css';
import './About.css';
import { screenContent } from "../shared/text"

function About() {
  const renderAbout = () => {
    return(
      screenContent.about.map(para => {
        return(
          <p className="About-text">{para}</p>
        )
      })
    )
  }
  return(
    <div className="About">
      {renderAbout()}
    </div>
  )
}
export default About;