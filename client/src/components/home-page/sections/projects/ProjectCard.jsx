import { useRef, useState, useEffect } from "react"
import { Link } from "react-router-dom"

import ProjectImage from "../../../../assets/png/project-mockup-masked/project-mockup-masked.png"


export default function ProjectCard({ project }) {

  // Beginning of viewport code
  const containerRef = useRef(null)
  const [ isVisible, setIsVisible ] = useState(false)
  const callbackFunction = (entries) => {
    const [ entry ] = entries
    if (entry.isIntersecting) {
      setIsVisible(true)
    }
  }
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0
  }
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options)
    if (containerRef.current) observer.observe(containerRef.current)
    
    return () => {
      if(containerRef.current) observer.unobserve(containerRef.current)
    }
  }, [containerRef, options])
  // Ending of viewport code

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
    <div className={isVisible ? ("projects__row animate slide-left delay-1") : ("d-none")} ref={containerRef}>
      {/* <img src={`src/assets/png/project-mockup-masked/${project.imageURLs[0]}`} /> */}
      <div className="projects__row-img-cont">
        <img
          src={`src/assets/png/project-mockup-masked/${project.imageURLs[0]}`}
          alt="Software Screenshot"
          className="projects__row-img"
          // loading="lazy"
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