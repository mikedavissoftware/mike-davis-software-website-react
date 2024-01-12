import { useState, useEffect } from "react"

import ProfilePicture from "../assets/jpeg/mds-prof-pic-close-square.jpg"
import LinkedInLogoBlack from "../assets/png/black/linkedin-ico-black.png"
import GithubLogoBlack from "../assets/png/black/github-ico-black.png"
import YouTubeLogoBlack from "../assets/png/black/yt-ico-black.png"
import HamMenu from "../assets/svg/ham-menu.svg"
import HamMenuClose from "../assets/svg/ham-menu-close.svg"


export default function Header() {

  const [active, setActive] = useState(false)

  const [scrollPosition, setScrollPosition] = useState(-500)

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition((position - 250) / 5); // the "- 100" is for setting the start position of the header appearance further down
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header" style={(scrollPosition >= 0) ? ({opacity: `${scrollPosition}%`}) : ({display: "none"})}>
      {/* <h1>scroll: {scrollOpacity}</h1> */}
      <div className="header__content">
        <a href="#home-hero">
          <div className="header__logo-container animate slide-left">
            <div className="header__logo-img-cont">
              <img
                src={ProfilePicture}
                alt="Mike Davis Profile Picture"
                className="header__logo-img"
              />
            </div>
            <span className="header__logo-sub">Mike Davis</span>
          </div>
        </a>
        <div className="header__social-cont animate slide-right">
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mikedavissoftware">
            <img
              className="main-footer__icon"
              src={LinkedInLogoBlack}
              alt="icon"
            />
          </a>
          <a target="_blank" rel="noreferrer" href="https://github.com/mikedavissoftware">
            <img
              className="main-footer__icon"
              src={GithubLogoBlack}
              alt="icon"
            />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCYzUffLPbfIJnjQgKIegclA">
            <img
              className="main-footer__icon"
              src={YouTubeLogoBlack}
              alt="icon"
            />
          </a>
        </div>

        <div className="header__main">
          <ul className="header__links animate slide-right">
            <li className="header__link-wrapper">
              <a href="./#home-hero" className="header__link">Home</a>
            </li>
            <li className="header__link-wrapper">
              <a href="./#about" className="header__link">Bio</a>
            </li>
            <li className="header__link-wrapper">
              <a href="./#skills" className="header__link">Skills</a>
            </li>
            <li className="header__link-wrapper">
              <a href="./#projects" className="header__link">Projects</a>
            </li>
            <li className="header__link-wrapper">
              <a href="./#blogs" className="header__link">Blogs</a>
            </li>
            <li className="header__link-wrapper">
              <a href="./#contact" className="header__link header__link-contact">Contact</a>
            </li>
            <li className="header__link-wrapper">
              <a href="./pdf/Michael Davis Software Engineering Resume.pdf" target="_blank" className="header__link btn btn--sm btn--theme animate glow delay-3" style={{color: "white", margin: "1.1rem 0", padding: "1rem 2rem", letterSpacing: "1px"}}>Resume</a>
            </li>
          </ul>
          
          <div className="header__main-ham-menu-cont animate glow">
            <img
              src={HamMenu}
              alt="hamburger menu"
              className={`header__main-ham-menu${(active) ? (" d-none") : ("")}`}
              onClick={() => {setActive(!active)}}
            />
            <img
              src={HamMenuClose}
              alt="hamburger menu close"
              className={`header__main-ham-menu-close${(active) ? ("") : (" d-none")}`}
              onClick={() => {setActive(!active)}}
            />
          </div>
        </div>
      </div>

      <div className={`header__sm-menu${(active) ? ("--active") : ("")}`}>
        <div className="header__sm-menu-content">
          <ul className="header__sm-menu-links">
            <li className="header__sm-menu-link">
              <a href="./#home-hero" onClick={() => setActive(false)}>Home</a>
            </li>

            <li className="header__sm-menu-link">
              <a href="./#about" onClick={() => setActive(false)}>Bio</a>
            </li>

            <li className="header__sm-menu-link">
              <a href="./#skills" onClick={() => setActive(false)}>Skills</a>
            </li>

            <li className="header__sm-menu-link">
              <a href="./#projects" onClick={() => setActive(false)}>Projects</a>
            </li>

            <li className="header__sm-menu-link">
              <a href="./#blogs" onClick={() => setActive(false)}>Blogs</a>
            </li>

            <li className="header__sm-menu-link">
              <a href="./#contact" onClick={() => setActive(false)}>Contact</a>
            </li>

            <li className="header__sm-menu-link">
              <a href="./pdf/Michael Davis Software Engineering Resume.pdf" target="_blank" onClick={() => setActive(false)}>Resume</a>
            </li>
          </ul>
        </div>
      </div>

      {/* <h1 style={{display: "block", textAlign: "center", fontSize: "30px"}}>{scrollPosition}</h1> */}
    </header>
  )
}