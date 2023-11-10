import { useState } from "react"

import BioLong from "./bio/BioLong"
import BioShort from "./bio/BioShort"


export default function AboutSection() {

  const [bioShort, setBioShort] = useState(false)

  function handleChange() {
    setBioShort(!bioShort)
    console.log(bioShort)
  }

  return (
    <section id="about" className="about sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">About Me</span>

          <ul class="tg-list">
            <li class="tg-list-item">
              <input class="tgl tgl-skewed" id="cb3" type="checkbox" onChange={() => handleChange()} />
              <label class="tgl-btn" data-tg-off="Long Version" data-tg-on="Short Version" for="cb3"></label>
            </li>
          </ul>

          {(bioShort) ? (
            <BioShort />
          ) : (
            <BioLong />
          )}
          
          
          <hr className="secondary"/>
          <p className="heading-sec__sub">
            <em>If you're interested in collaborating or getting to know me better, don't hesitate to reach out. I am always happy to connect with someone new!</em>
          </p>
          <a href="#contact" id="get-in-touch-btn" className="btn btn--med btn--theme btn--center dynamicBgClr">Get in Touch!</a>
        </h2>
      </div>
    </section>
  )
}