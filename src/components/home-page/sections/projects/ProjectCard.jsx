import { useRef, useState, useEffect } from "react"
import { Link } from "react-router-dom"


export default function ProjectCard({ project, index, arrayLength }) {

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
          key={button.id}
          to={button.link}
          className="btn btn--sm btn--theme dynamicBgClr"
          target="_blank"
        >{button.text}</Link>
      ) : (null)
    )
  })

  return (
    <div className={isVisible ? ("projects__row animate slide-left delay-1") : ("d-none")} ref={containerRef}>
      <div className="projects__row-non-buttons">
        <div className="projects__row-img-cont">
          <img
            src={`https://drive.google.com/uc?export=view&id=${project.gifID}`}
            alt="Software Screenshot"
            className="projects__row-img animate fade"
            loading="lazy"
          />
        </div>
        <div className="projects__row-content">
          <h3 className="projects__row-content-title">{project.title}</h3>
          <p className="projects__row-content-desc">
            {project.description}
          </p>
          
        </div>  
      </div>
      <div className="projects__row-buttons">
        {buttonComponents}
      </div>
      {(index < (arrayLength - 1)) ? (
        <hr className="secondary"/>
      ) : (<></>)}
    </div>
  )
}