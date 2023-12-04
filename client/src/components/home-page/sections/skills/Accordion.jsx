import { useState, useEffect, useRef } from "react"

import AccordionCategory from "./AccordionCategory"


export default function Accordion({ skill, active, handleClick }) {

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

  const categories = skill.categories.map((category) => {
    return (
      <AccordionCategory key={category.id} category={category} />
    )
  })

  return (
    <div className={isVisible ? ("animate slide-up delay-2") : ("d-none")} ref={containerRef}>
      <button 
        className={`skills__content-title accordion${(active === skill.class) ? " active" : ""}`}
        id={skill.class}
        onClick={handleClick}
      >{skill.title}</button>

      <div className={`skills__content-panel${(active === skill.class) ? "-active" : ""}`}>
        {categories}
      </div>
    </div>
  )
}