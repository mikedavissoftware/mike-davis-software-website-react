import { useState, useEffect, useRef } from "react"


export default function GetInTouchButton() {

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
  
  return (
    <>
      <a href="#contact" id="get-in-touch-btn" className={isVisible ? ("btn btn--med btn--theme btn--center dynamicBgClr animate glow delay-3") : ("btn btn--med btn--theme btn--center dynamicBgClr d-none")} ref={containerRef}>Get in Touch!</a>
    </>
  )
}