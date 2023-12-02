import DaggettControlCard from "./individual-projects/DaggettControlCard"
import SpiritualDirectionCard from "./individual-projects/SpiritualDirectionCard"
import BackyardBowlsCard from "./individual-projects/BackyardBowlsCard"

import ProjectCard from "./individual-projects/ProjectCard"

import { projects } from "../../../../db/projects"


export default function ProjectsSection() {

  console.log(projects)

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
          {/* <DaggettControlCard />
          <hr className="secondary"/>
          <SpiritualDirectionCard />
          <hr className="secondary"/>
          <BackyardBowlsCard /> */}
        </div>
      </div>
    </section>
  )
}