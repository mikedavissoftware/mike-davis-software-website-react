import { software } from "../../../../../db/skills"

import SkillsSkill from "../SkillsSkill"
import SkillsProgram from "../SkillsProgram"


export default function SoftwareAccordion({ active, handleClick }) {

  const languagesComponents = software.languages.map((language) => {
    return <SkillsProgram program={language} />
  })

  const frameworksLibrarysPluginsComponents = software.frameworksLibrarysPlugins.map((skill) => {
    return <SkillsSkill skill={skill} />
  })

  const platformsEnvironmentsOtherComponents = software.platformsEnvironmentsOther.map((skill) => {
    return <SkillsSkill skill={skill} />
  })
  
  const skillsPrinciplesComponents = software.skillsPrinciples.map((skill) => {
    return <SkillsSkill skill={skill} />
  })

  return (
    <div>
      <button 
        className={`skills__content-title accordion${(active === "software-engineering") ? " active" : ""}`}
        id="software-engineering"
        onClick={handleClick}
      >Software Engineering</button>

      <div className={`panel${(active === "software-engineering") ? " active" : ""}`}>
        
        <h4 className="skills__content-subtitle">Languages</h4>
        <div className="skills">
          {languagesComponents}
        </div>

        <h4 className="skills__content-subtitle">Frameworks, Libraries, & Plugins</h4>
        <div className="skills">
          {frameworksLibrarysPluginsComponents}
        </div>

        <h4 className="skills__content-subtitle">Platforms, Environments, & Other Tools</h4>
        <div className="skills">
          {platformsEnvironmentsOtherComponents}
        </div>

        <h4 className="skills__content-subtitle">Skills & Principles</h4>
        <div className="skills">
          {skillsPrinciplesComponents}
        </div>
      </div>
    </div>
  )
}