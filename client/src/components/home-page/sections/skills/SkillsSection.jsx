import { useState } from "react"
import { skills } from "../../../../db/skills"

import Accordion from "./Accordion"


export default function SkillsSection() {

  const [active, setActive] = useState("")

  const handleClick = (event) => {
    (event.target.id === active) ? (setActive("")) : (setActive(event.target.id));
    // console.log(event.target.id)
  }

  const accordionComponents = skills.map((skill, index) => {
    return (<Accordion key={index + 1} active={active} handleClick={handleClick} skill={skill} />)
  })

  return (
    <section id="skills" className="skills sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec">
          <span className="heading-sec__main">Skills</span>
          <p className="heading-sec__sub">
          </p>
        </h2>
        <div className="skills__content">
          {accordionComponents}
        </div>
      </div>
    </section>
  )
}