import { useRef, useState, useEffect } from "react"
import { Link } from "react-router-dom"


export default function BlogPostCard({ blog, index, arrayLength }) {

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
      <div className={isVisible ? ("blogs__row animate slide-left delay-1") : ("d-none")} ref={containerRef}>
        <div className="blogs__row-img-cont">
          <img
            src={blog.cover_image}
            alt="Software Screenshot"
            className="blogs__row-img"
            loading="lazy"
          />
        </div>
        <div className="blogs__row-content">
          <h3 className="blogs__row-content-title"><a href={blog.canonical_url} target="_blank">{blog.title}</a></h3>
          <p className="blogs__row-content-desc">
            {`"${blog.description.replace("&amp;", "&")}"`}
          </p>
          <Link 
            to={blog.url}
            className="btn btn--med btn--theme dynamicBgClr"
            target="_blank"
          >Read Blog Post</Link>
        </div>
      </div>
      {(index < (arrayLength - 1)) ? (<hr className="secondary"/>) : (<></>)}
    </>
  )
}