


export default function BlogPostCard({ blog }) {

  console.log(blog)

  return (
    <div>
      <h1><a href={blog.canonical_url} target="_blank">{blog.title}</a></h1>
      <img src={blog.cover_image} />
    </div>
  )
}