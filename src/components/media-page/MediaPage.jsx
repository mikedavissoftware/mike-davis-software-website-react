import { useNavigate } from "react-router-dom"

import MediaHeader from "./MediaHeader"
import MediaHeroSection from "./sections/MediaHeroSection"

export default function MediaPage() {

  const redirect = useNavigate()
  
  return (
    <div className="home-page">
      <MediaHeader redirect={redirect} />
      <MediaHeroSection redirect={redirect} />
      <></>
    </div>
  )
}