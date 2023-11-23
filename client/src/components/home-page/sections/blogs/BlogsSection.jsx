import { useState, useEffect } from "react"

import BlogPostCard from "./BlogPostCard"


export default function BlogsSection() {

  const [blogsData, setBlogsData] = useState([])

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=mikedavissoftware")
    .then(r => r.json())
    .then(articlesData => {
      // console.log(articlesData)
      setBlogsData(articlesData)
    })
  }, [])
  

  const blogPostCardComponents = blogsData.map((blog) => {
    return <BlogPostCard key={blog.id} blog={blog} />
  })

  return (
    <section id="skills" className="skills sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">Blogs</span>
          <p className="heading-sec__sub">
          </p>
        </h2>

        <div>
          {blogPostCardComponents}
        </div>
        
      </div>
    </section>
  )
}