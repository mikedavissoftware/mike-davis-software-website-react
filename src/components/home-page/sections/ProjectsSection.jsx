import { useState } from "react"

import ProjectCard from "./projects/ProjectCard"
import GetInTouchButton from "./GetInTouchButton"

import { projects } from "../../../db/projects"


export default function ProjectsSection() {

  const projectCardComponents = projects.cards.map((project, index) => {
    return (
      <ProjectCard key={project.id} project={project} index={index} arrayLength={projects.cards.length} />
    )
  })

  return (
    <section id="projects" className="projects sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec">
          <span className="heading-sec__main">Projects</span>
          <p className="heading-sec__sub" style={{textAlign: "center"}}>
            Believe it or not, you've already seen one of my projects — this portfolio site! I put a lot of effort into building it as an example of my web development skills. To explore more examples of my skills, check out three of my projects below. If you'd like to see some of my contributions to the online developer community as well, <a href="./#blogs">read my blog posts</a>!
          </p>
        </h2>
        <hr className="secondary"/>
        <div className="projects__content">
          {projectCardComponents}
        </div>
      </div>
      <GetInTouchButton />
    </section>
  )
}