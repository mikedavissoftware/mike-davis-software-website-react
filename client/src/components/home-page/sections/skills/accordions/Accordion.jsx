import SkillsSkill from "./skill-bubbles/SkillsSkill"
import SkillsProgram from "./skill-bubbles/SkillsProgram"
import AccordionCategory from "./AccordionCategory"


export default function Accordion({ skill, active, handleClick }) {

  const categories = skill.categories.map((category) => {
    return (
      <AccordionCategory key={category.id} category={category} />
    )
  })

  return (
    <div>
      <button 
        className={`skills__content-title accordion${(active === "software-engineering") ? " active" : ""}`}
        id="software-engineering"
        onClick={handleClick}
      >{skill.title}</button>

      <div className={`skills__content-panel${(active === "software-engineering") ? "-active" : ""}`}>
        {categories}
      </div>
    </div>
  )
}