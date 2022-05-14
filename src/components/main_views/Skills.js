import '../../index.scss';
import './Skills.css';
import { skillsArr } from "../shared/skillsArr";

function Skills() {
  const renderFirstSkills = () => {
    return(
      skillsArr[0].skills.map((skill, i) => {
        if(skill.area === "row1") {
          return(
            <div className={"Skills-div Skills-div-" + i} key={"Skills-div" + i}>
              <img  className="Skills-icon" 
                    src={skill.image} 
                    alt={skill.name + " icon"}>
              </img>
            </div>
          )
        } else {
          return null;
        }
      })
    )
  }
  const renderSecondSkills = () => {
    return(
      skillsArr[0].skills.map((skill, i) => {
        if(skill.area === "row2") {
          return(
            <div className={"Skills-div Skills-div-" + i} key={"Skills-div" + i}>
              <img  className="Skills-icon" 
                    src={skill.image} 
                    alt={skill.name + " icon"}>
              </img>
            </div>
          )
        } else {
          return null;
        }
      })
    )
  }
  return(
    <div className="Skills">
      <div className="Skills-table">
        <h2 className="Skills-category">
          <span className="text-span">
            {skillsArr[0].category}
          </span></h2>
        <div className="Skills-list row1">
        {renderFirstSkills()}
        </div>
        <div className="Skills-list row2">
        {renderSecondSkills()}
        </div>
      </div>
    </div>
  )
}
export default Skills;