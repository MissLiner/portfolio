import '../../index.scss';
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
    <div className="About colors-Canvas">
      <h2>My Story</h2>
      {renderAbout()}
    </div>
  )
}
export default About;