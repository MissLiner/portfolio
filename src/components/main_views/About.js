import '../../index.scss';
import './About.css';
import { aboutContent } from "../shared/text"

function About() {
  const renderAbout = () => {
    return(
      aboutContent.map(unit => {
        return(
          <div className="About-unit" key={unit.topic}>
            <h3 className="About-topic">
                {unit.topic}
            </h3>
            <p className="About-text">
              {unit.text}
            </p>
          </div>
        )
      })
    )
  }
  return(
    <div className="About">
      <h1 className="About-title">My Story</h1>
      {renderAbout()}
    </div>
  )
}
export default About;