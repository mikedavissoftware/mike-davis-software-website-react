import { useState } from "react"

import ProjectCard from "./ProjectCard"

import { projects } from "../../../../db/projects"


export default function ProjectsSection() {

  const projectCardComponents = projects.cards.map((project, index) => {
    return (
      <>
        <ProjectCard project={project} />
        {(index < (projects.cards.length - 1)) ? (
          <hr className="secondary"/>
        ) : (<></>)}
      </>
    )
  })

  return (
    <section id="projects" className="projects sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec">
          <span className="heading-sec__main">Projects</span>
          {/* <span className="heading-sec__sub">
            Below is a selection of a few of my recent projects in the realm of web development. Feel free to check them out and explore their individual case studies for more in-depth information!
          </span> */}
        </h2>

        <div className="projects__content">
          {projectCardComponents}
        </div>
      </div>
    </section>
  )
}