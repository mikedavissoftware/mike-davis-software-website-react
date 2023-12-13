import { useState, useEffect, useRef } from "react"


export default function BioToggleButton({ bioShort, setBioShort }) {

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

  function handleChange() {
    setBioShort(!bioShort)
  }

  return (
    <ul className={isVisible ? ("tg-list animate glow") : ("tg-list d-none")} ref={containerRef}>
      <li className="tg-list-item">
        <input className="tgl tgl-skewed" id="cb3" type="checkbox" onChange={() => handleChange()} />
        <label className="tgl-btn" data-tg-off="Click for Long Bio" data-tg-on="Click for Short Bio" htmlFor="cb3"></label>
      </li>
    </ul>
)
}