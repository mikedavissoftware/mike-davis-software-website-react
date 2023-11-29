import { useState, useEffect } from "react"

import BlogPostCard from "./BlogPostCard"


export default function BlogsSection() {

  const [blogsData, setBlogsData] = useState([])

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=mikedavissoftware")
    .then(r => r.json())
    .then(articlesData => {
      // console.log(articlesData)
      setBlogsData(articlesData.slice(0,3))
    })
  }, [])
  console.log(blogsData)
  

  const blogPostCardComponents = blogsData.map((blog, index) => {
    return (
      <>
        <BlogPostCard key={blog.id} blog={blog} />
        {(index < (blogsData.length - 1)) ? (<hr className="secondary"/>) : (<></>)}
      </>
    )
  })

  return (
    <section id="blogs" className="blogs sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec">
          <span className="heading-sec__main">Blogs</span>
        </h2>

        <div className="blogs__content">
          {blogPostCardComponents}
        </div>
        
      </div>
    </section>
  )
}