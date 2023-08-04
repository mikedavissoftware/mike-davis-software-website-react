import { Link } from "react-router-dom"

import MockupImage from "../../../../../assets/png/project-mockup-masked/project-mockup-masked.png"


export default function SpiritualDirectionCard() {



  return (
    <div class="projects__row">
      <div class="projects__row-img-cont">
        <img
          src={MockupImage}
          alt="Software Screenshot"
          class="projects__row-img"
          loading="lazy"
        />
      </div>
      <div class="projects__row-content">
        <h3 class="projects__row-content-title">Spiritual Direction</h3>
        <p class="projects__row-content-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
          facilis tempora, explicabo quae quod deserunt eius sapiente
          praesentium.
        </p>
        <Link 
          to="/spiritual-direction"
          class="btn btn--med btn--theme dynamicBgClr"
          target="_blank"
        >Case Study</Link>
      </div>
    </div>
  )
}