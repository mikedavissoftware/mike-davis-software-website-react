import { useState } from "react"
import { skills } from "../../../db/skills"

import Accordion from "./skills/Accordion"
import GetInTouchButton from "./general/GetInTouchButton"


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
        </h2>
        <p className="heading-sec__sub animate slide-left">
          <strong>AT MY CORE, I AM </strong>hard-working, resourceful, creative, empathetic, & self-motivated, with exceptional leadership & communication skills and a propensity to learn something new from every experience. With my academic background in ecology, engineering, & mathematics, I have proven myself as a systems-thinker that brings an engineer's mindset to all of my independent & collaborative ventures in software, freelancing, nonprofits, media, and the arts. These ventures have culminated in the broad set of skills seen below. To see examples of my software engineering skills at work, <a href="./#projects">check out my projects</a> or <a href="./#blogs">read my blog posts</a>.
        </p>
        <hr className="secondary"/>
        <div className="skills__content">
          {accordionComponents}
        </div>
        <GetInTouchButton />
      </div>
      
    </section>
  )
}