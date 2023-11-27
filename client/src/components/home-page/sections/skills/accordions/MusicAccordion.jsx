import { music } from "../../../../../db/skills"

import SkillsSkill from "./skill-bubbles/SkillsSkill"
import SkillsProgram from "./skill-bubbles/SkillsProgram"


export default function MusicAccordion({ active, handleClick }) {

  const instrumentsComponents = music.instruments.map((instrument) => {
    return <SkillsProgram program={instrument} />
  })

  const compositionSongwritingComponents = music.compositionSongwriting.map((skill) => {
    return <SkillsSkill skill={skill} />
  })

  const musicPerformanceComponents = music.musicPerformance.map((skill) => {
    return <SkillsSkill skill={skill} />
  })

  return (
    <div>
      <button 
        className={`skills__content-title accordion${(active === "music-composition-and-performance") ? " active" : ""}`}
        id="music-composition-and-performance"
        onClick={handleClick}
      >Music Composition & Performance</button>

      <div className={`skills__content-panel${(active === "music-composition-and-performance") ? "-active" : ""}`}>

        <h4 className="skills__content-subtitle">Instruments</h4>
        <div className="skills__content-list">
          {instrumentsComponents}
        </div>

        <h4 className="skills__content-subtitle">Music Composition & Songwriting</h4>
        <div className="skills__content-list">
          {compositionSongwritingComponents}
        </div>

        <h4 className="skills__content-subtitle">Music Performance</h4>
        <div className="skills__content-list">
          {musicPerformanceComponents}         
        </div>

      </div>
    </div>
  )
}