import { useState } from "react"

import BioToggleButton from "./bio/BioToggleButton"
import BioLong from "./bio/BioLong"
import BioShort from "./bio/BioShort"
import GetInTouchButton from "./bio/GetInTouchButton"

export default function AboutSection() {

  const [bioShort, setBioShort] = useState(true)

  return (
    <section id="about" className="about sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec">
          <span className="heading-sec__main">Bio</span>

          {/* <hr className="secondary"/> */}

          <BioToggleButton bioShort={bioShort} setBioShort={setBioShort} />

          {(bioShort) ? (
            <BioShort />
          ) : (
            <BioLong />
          )}
          
          
          {/* <hr className="secondary"/> */}
          {/* <span className="heading-sm center-text" style={{fontStyle: "italic", fontWeight: "normal"}}>
            Interested in Working With Me?
          </span> */}
          <GetInTouchButton />
        </h2>
      </div>
    </section>
  )
}