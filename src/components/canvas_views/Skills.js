import '../../index.css';
import './Skills.css';
import { skillsArr } from "../shared/skillsArr";

function Skills() {
  const renderSkills = () => {
    return(
      skillsArr[0].skills.map(skill => {
        return(
          <div className="Skills-skill-div">
            <img  className="Skills-skill-icon" 
                  src={skill.image} 
                  alt={skill.name + " icon"}>
            </img>
            <div className="Skills-skill-name">
              {skill.name}
            </div>
          </div>
        )
      })
    )
  }
  return(
    <div className="Skills colors2">
      <div className="Skills-table">
        <h3 className="Skills-category">{skillsArr[0].category}</h3>
        {renderSkills()}
      </div>
    </div>
  )
}
export default Skills;