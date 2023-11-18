import { entrepreneurship } from "../../../../../db/skills"

import SkillsSkill from "../SkillsSkill"
import SkillsProgram from "../SkillsProgram"


export default function EntrepreneurshipAccordion({ active, handleClick }) {

  const industriesComponents = entrepreneurship.industries.map((program) => {
    return <SkillsProgram program={program} />
  })

  const musicAndEntertainmentComponents = entrepreneurship.musicAndEntertainment.map((skill) => {
    return <SkillsSkill skill={skill} />
  })

  return (
    <div>
      <button 
        className={`skills__content-title accordion${(active === "entrepreneurship-and-business") ? " active" : ""}`}
        id="entrepreneurship-and-business"
        onClick={handleClick}
      >Entrepreneurship & Business Development</button>

      <div className={`panel${(active === "entrepreneurship-and-business") ? " active" : ""}`}>

        <h4 className="skills__content-subtitle">Industries</h4>
        <div className="skills">
          {industriesComponents}
        </div>

        <h4 className="skills__content-subtitle">Music & Entertainment</h4>
        <div className="skills">
          {musicAndEntertainmentComponents}
        </div>

        <h4 className="skills__content-subtitle">501(c)(3) Nonprofit Organizations</h4>
        <div className="skills">
          <div className="skills__skill">Skill</div>
          <div className="skills__skill">Skill</div>
          <div className="skills__skill">Skill</div>
          <div className="skills__skill">Skill</div>
          <div className="skills__skill">Skill</div>
          <div className="skills__skill">Skill</div>
          <div className="skills__skill">Skill</div>
          <div className="skills__skill">Skill</div>             
        </div>

        <h4 className="skills__content-subtitle">Freelance Media Production</h4>
        <div className="skills">
          <div className="skills__skill">Skill</div>
          <div className="skills__skill">Skill</div>
          <div className="skills__skill">Skill</div>
          <div className="skills__skill">Skill</div>
          <div className="skills__skill">Skill</div>
          <div className="skills__skill">Skill</div>
          <div className="skills__skill">Skill</div>
          <div className="skills__skill">Skill</div>             
        </div>

        <h4 className="skills__content-subtitle">Independent Film</h4>
        <div className="skills">
          <div className="skills__skill">Skill</div>
          <div className="skills__skill">Skill</div>
          <div className="skills__skill">Skill</div>
          <div className="skills__skill">Skill</div>
          <div className="skills__skill">Skill</div>
          <div className="skills__skill">Skill</div>
          <div className="skills__skill">Skill</div>
          <div className="skills__skill">Skill</div>             
        </div>

      </div>
    </div>
  )
}