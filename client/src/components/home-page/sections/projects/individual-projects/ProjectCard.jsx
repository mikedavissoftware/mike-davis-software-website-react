import { Link } from "react-router-dom"


export default function DaggettControlCard({ project }) {



  return (
    <div className="projects__row">
      <div className="projects__row-img-cont">
        <img
          src={`../../../../../assets/png/project-mockups-masked/${project.imagURL}`}
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
        <Link 
          to={project.frontEndURL}
          className="btn btn--med btn--theme dynamicBgClr"
          target="_blank"
        >Front End App</Link>
        {(project.backEndURL) ? (
          <Link 
            to={project.frontEndURL}
            className="btn btn--med btn--theme dynamicBgClr"
            target="_blank"
          >Back End App</Link>
        ) : (
          <></>
        )}
        <Link 
          to={project.githubURL}
          className="btn btn--med btn--theme dynamicBgClr"
          target="_blank"
        >Github Repo</Link>
      </div>
    </div>
  )
}