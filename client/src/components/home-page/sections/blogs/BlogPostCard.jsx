import { Link } from "react-router-dom"


export default function BlogPostCard({ blog }) {


  
  return (
    <div className="blogs__row">
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
          facilis tempora, explicabo quae quod deserunt eius sapiente
          praesentium.
        </p>
        <Link 
          to="/backyard-bowls"
          className="btn btn--med btn--theme dynamicBgClr"
          target="_blank"
        >Read Article</Link>
      </div>
    </div>
  )
}