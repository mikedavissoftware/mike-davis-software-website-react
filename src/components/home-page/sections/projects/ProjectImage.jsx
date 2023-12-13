import { useState, useEffect } from "react"


export default function ProjectImage({ imageIDs }) {

  const [imageCount, setImageCount] = useState(0)


  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      setImageCount(imageCount + 1);

    }, 3000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [imageCount]);

  // const imageComponents = imageIDs.map((imageID) => {
  //   return(
      
  //   )
  // })
  
  return (
    <>
      <img
        src={`https://drive.google.com/uc?export=view&id=${imageIDs[imageCount % imageIDs.length]}`}
        alt="Software Screenshot"
        className="projects__row-img animate fade"
        loading="lazy"
      />
    </>
  )
}