import { useState, useEffect } from "react"


export default function ProjectImage({ imageIDs }) {

  const [imageCount, setImageCount] = useState(0)
  const [imageIndex, setImageIndex] = useState(0)

  function imageCounter() {
    setImageCount(imageCount + 1)
    setImage(imageComponents[imageCount % imageIDs.length])
  }

  const imageComponents = imageIDs.map((imageID) => {
    return(
      <>
        <img
          src={`https://drive.google.com/uc?export=view&id=${imageID}`}
          alt="Software Screenshot"
          className="projects__row-img animate fade"
          // loading="lazy"
        />
      </>
    )
  })

  // const [imageIndex, setImageIndex] = useState(imageCount)
  const [image, setImage] = useState(imageComponents[0])

  useEffect(() => {
    // setImageIndex()
    setImage(imageComponents[imageCount % imageIDs.length])
  }, [imageCount])
  
  return (
    <>
      {image}
    </>
  )
}