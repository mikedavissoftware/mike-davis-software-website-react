
import LinkedInLogoWhite from "../assets/png/white/linkedin-ico-white.png"
import GithubLogoWhite from "../assets/png/white/github-ico-white.png"
import YouTubeLogoWhite from "../assets/png/white/yt-ico-white.png"


export default function Footer() {

  const today = new Date()

  const year = today.getFullYear()

  return (
    <footer className="main-footer">
      <div className="main-container">
        <div className="main-footer__upper">
          <div className="main-footer__row main-footer__row-2">
            <h4 className="heading heading-sm text-lt">Mike Davis</h4>
            <p className="main-footer__short-desc">
              💻 Software Developer 💻
              <br/>
              🔊 Multimedia Producer 🎥
              <br/>
              💡 Creative Entrepreneur 🤝
              <br/>
              🎵 Professional Musician 🥁
              <br/>
              🌯 Food Service Professional ☕
            </p>
            <div className="main-footer__social-cont">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mikedavissoftware">
                <img
                  className="main-footer__icon"
                  src={LinkedInLogoWhite}
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/mikedavissoftware">
                <img
                  className="main-footer__icon"
                  src={GithubLogoWhite}
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCYzUffLPbfIJnjQgKIegclA">
                <img
                  className="main-footer__icon"
                  src={YouTubeLogoWhite}
                  alt="icon"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="main-footer__lower">
          &copy; {year} Mike Davis<br/>Though this website was inspired by a
          <a rel="noreferrer" target="_blank" href="https://github.com/rammcodes/Dopefolio">template</a> by <a rel="noreferrer" target="_blank" href="https://rammaheshwari.com">Ram Maheshwari</a>,<br/>Mike Davis heavily customized it and converted it from HTML to React.js.
        </div>
      </div>
    </footer>
  )
}