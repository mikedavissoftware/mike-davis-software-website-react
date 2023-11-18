import { foodHospitality } from "../../../../../db/skills"

import SkillsSkill from "./skill-bubbles/SkillsSkill"
import SkillsProgram from "./skill-bubbles/SkillsProgram"


export default function FoodAndHospitalityAccordion({ active, handleClick }) {

  const employersComponents = foodHospitality.employers.map((employer) => {
    return <SkillsProgram program={employer} />
  })

  const logisticsComponents = foodHospitality.logistics.map((skill) => {
    return <SkillsSkill skill={skill} />
  })

  const foodBeverageComponents = foodHospitality.foodBeverage.map((skill) => {
    return <SkillsSkill skill={skill} />
  })

  return (
    <div>
      <button 
        className={`skills__content-title accordion${(active === "food-and-hospitality") ? " active" : ""}`}
        id="food-and-hospitality"
        onClick={handleClick}
      >Food, Hospitality, & Logistics</button>

      <div className={`panel${(active === "food-and-hospitality") ? " active" : ""}`}>

        <h4 className="skills__content-subtitle">Employers</h4>
        <div className="skills">
          {employersComponents}
        </div>

        <h4 className="skills__content-subtitle">Logistics & Delivery</h4>
        <div className="skills">
          {logisticsComponents}
        </div>

        <h4 className="skills__content-subtitle">Food & Beverage</h4>
        <div className="skills">
          {foodBeverageComponents}            
        </div>

      </div>
    </div>
  )
}