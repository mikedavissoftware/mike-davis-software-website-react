import { useState } from "react"

import BioToggleButton from "./bio/BioToggleButton"
import BioLong from "./bio/BioLong"
import BioShort from "./bio/BioShort"


export default function AboutSection() {

  const [bioShort, setBioShort] = useState(true)

  return (
    <section id="about" className="about sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec">
          <span className="heading-sec__main">About Me</span>

          <p className="heading-sec__sub">
            <strong>AT MY CORE, I AM </strong>hard-working, resourceful, creative, empathetic, & self-motivated, with exceptional leadership & communication skills and a propensity to learn something new from every experience. With my academic background in ecology, engineering, & mathematics, I am a systems-thinker that brings an engineer's mindset to all of my independent & collaborative ventures in software, freelancing, nonprofits, media, and the arts.
          </p>

          {/* <hr className="secondary"/> */}

          <BioToggleButton bioShort={bioShort} setBioShort={setBioShort} />

          {(bioShort) ? (
            <BioShort />
          ) : (
            <BioLong />
          )}
          
          
          <hr className="secondary"/>
          <h3 className="heading-sm center-text">
            Interested in Working With Me?
          </h3>
          <a href="#contact" id="get-in-touch-btn" className="btn btn--med btn--theme btn--center dynamicBgClr">Get in Touch!</a>
        </h2>
      </div>
    </section>
  )
}