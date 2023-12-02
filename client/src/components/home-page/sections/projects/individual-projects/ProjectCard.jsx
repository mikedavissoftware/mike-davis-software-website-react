import { Link } from "react-router-dom"


export default function ProjectCard({ project }) {

  console.log(project.buttons)

  const buttonComponents = project.buttons.map((button) => {
    return (
      (button.link != "") ? (
        <Link 
          to={button.link}
          className="btn btn--med btn--theme dynamicBgClr"
          target="_blank"
        >{button.text}</Link>
      ) : (<></>)
    )
  })

  return (
    <div className="projects__row">
      <div className="projects__row-img-cont">
        <img
          src={`src/assets/png/project-mockup-masked/${project.imageURLs[0]}`}
          alt="Software Screenshot"
          className="projects__row-img"
          loading="lazy"
        />
      </div>
      <div className="projects__row-content">
        <h3 className="projects__row-content-title">{project.title}</h3>
        <p className="projects__row-content-desc">
          {project.description}
        </p>
        {buttonComponents}
      </div>
    </div>
  )
}