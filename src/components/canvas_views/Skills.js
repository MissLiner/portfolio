import '../../index.css';
import './Skills.css';
import { skillsArr } from "../shared/skillsArr";

function Skills() {
  const renderSkills = () => {
    return(
      <div className="Skills-table">
        <h3 className="Skills-category">{skillsArr[0].category}</h3>
      </div>
    )
  }
  return(
    <div className="Skills colors2">
      {renderSkills()}
    </div>
  )
}
export default Skills;