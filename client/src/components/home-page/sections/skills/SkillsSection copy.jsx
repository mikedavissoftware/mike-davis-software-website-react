import { useState } from "react"

import SoftwareAccordion from "./accordions/SoftwareAccordion"
import MediaAccordion from "./accordions/MediaAccordion"
import EntrepreneurshipAccordion from "./accordions/EntrepreneurshipAccordion"
import MusicAccordion from "./accordions/MusicAccordion"
import FoodAndHospitalityAccordion from "./accordions/FoodAndHospitalityAccordion"


export default function SkillsSection() {

  const [active, setActive] = useState("")

  const handleClick = (event) => {
    (event.target.id === active) ? (setActive("")) : (setActive(event.target.id));
    // console.log(event.target.id)
  }

  return (
    <section id="skills" className="skills sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec">
          <span className="heading-sec__main">My Skills</span>
          <p className="heading-sec__sub">
          </p>
        </h2>
        <div className="skills__content">
          <SoftwareAccordion active={active} handleClick={handleClick} />
          <MediaAccordion active={active} handleClick={handleClick} />
          <EntrepreneurshipAccordion active={active} handleClick={handleClick} />
          <MusicAccordion active={active} handleClick={handleClick} />
          <FoodAndHospitalityAccordion active={active} handleClick={handleClick} />
        </div>
      </div>
    </section>
  )
}