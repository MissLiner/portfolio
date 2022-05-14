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
              <span className="text-span">
                {unit.topic}
              </span>
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
      <h2>My Story</h2>
      {renderAbout()}
    </div>
  )
}
export default About;