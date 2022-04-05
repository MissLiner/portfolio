import '../../index.css';
import './Skills.css';
import { skillsArr } from "../shared/skillsArr";

function Skills() {
  const renderSkills = () => {
    return(
      skillsArr[0].skills.map((skill, i) => {
        return(
          <div className={"Skills-div Skills-div-" + i}>
            <img  className="Skills-icon" 
                  src={skill.image} 
                  alt={skill.name + " icon"}>
            </img>
            <div className="Skills-name">
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
        <div className="Skills-list">
        {renderSkills()}
        </div>
      </div>
    </div>
  )
}
export default Skills;