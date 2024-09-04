import HeaderHome from "./HeaderHome"
import HeroSection from "./sections/HeroSection"
import BioSection from "./sections/BioSection"
import SkillsSection from "./sections/SkillsSection"
import ProjectsSection from "./sections/ProjectsSection"
import BlogsSection from "./sections/BlogsSection"
import ContactSection from "./sections/ContactSection"


export default function HomePage() {



  return (
    <div className="home-page">
      <HeaderHome />
      <HeroSection />
      <BioSection />
      <SkillsSection />
      <ProjectsSection />
      <BlogsSection />
      <ContactSection />
    </div>
  )
}