import '../../index.scss';
import './About.css';
import { aboutContent } from "../shared/text"

function About() {
  const renderAbout = () => {
    return(
      aboutContent.map(unit => {
        return(
          <div className="About-unit">
            <h5 className="About-topic">
                <i>{unit.topic}</i>
            </h5>
            <p className="About-text">
              {unit.text}
            </p>
          </div>
        )
      })
    )
  }
  return(
    <div className="About colors-Canvas">
      <h2 className="About-title">My Story</h2>
      {renderAbout()}
    </div>
  )
}
export default About;