import { media } from "../../../../../db/skills"

import SkillsSkill from "./skill-bubbles/SkillsSkill"
import SkillsProgram from "./skill-bubbles/SkillsProgram"


export default function MediaAccordion({ active, handleClick }) {

  const programsComponents = media.programs.map((program) => {
    return <SkillsProgram program={program} />
  })

  const audioProductionComponents = media.audioProduction.map((skill) => {
    return <SkillsSkill skill={skill} />
  })

  const videoProductionComponents = media.videoProduction.map((skill) => {
    return <SkillsSkill skill={skill} />
  })

  const graphicDesignComponents = media.graphicDesign.map((skill) => {
    return <SkillsSkill skill={skill} />
  })

  return (
    <div>
      <button 
        className={`skills__content-title accordion${(active === "media-production") ? " active" : ""}`}
        id="media-production"
        onClick={handleClick}
      >Media Production</button>

      <div className={`panel${(active === "media-production") ? " active" : ""}`}>

        <h4 className="skills__content-subtitle">Software Programs</h4>
        <div className="skills">
          {programsComponents}
        </div>
        
        <h4 className="skills__content-subtitle">Audio Production</h4>
        <div className="skills">
          {audioProductionComponents}
        </div>

        <h4 className="skills__content-subtitle">Film & Video Production</h4>
        <div className="skills">
          {videoProductionComponents}
        </div>

        <h4 className="skills__content-subtitle">Graphic Design</h4>
        <div className="skills">
          {graphicDesignComponents}
        </div>
        
      </div>
    </div>
  )
}