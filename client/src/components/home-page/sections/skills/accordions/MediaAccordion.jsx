


export default function MediaAccordion({ active, handleClick }) {



  return (
    <div>
      <button 
        className={`skills__content-title accordion${(active === "media-production") ? " active" : ""}`}
        id="media-production"
        onClick={handleClick}
      >Media Production</button>

      <div className={`panel${(active === "media-production") ? " active" : ""}`}>

        <h4 className="skills__content-subtitle">Software Programs</h4>
        <div className="skills">
          <div className="skills__program">Bitwig</div>
          <div className="skills__program">Ableton</div>
          <div className="skills__program">Pro Tools</div>
          <div className="skills__program">Logic Pro</div>
          <div className="skills__program">VST Plugins</div>
          <div className="skills__program">Kontakt</div>
          <div className="skills__program">Adobe Creative Suite</div>
          <div className="skills__program">Photoshop</div>
          <div className="skills__program">Illustrator</div>
          <div className="skills__program">Premiere Pro</div>
          <div className="skills__program">Davinci Resolve</div>
          <div className="skills__program">After Effects</div>
          <div className="skills__program">Wordpress</div>
        </div>
        
        <h4 className="skills__content-subtitle">Audio Production</h4>
        <div className="skills">
          <div className="skills__skill">Music Production</div>
          <div className="skills__skill">Mixing</div>
          <div className="skills__skill">Mastering</div>
          <div className="skills__skill">Sound Engineering</div>
          <div className="skills__skill">Sound Design</div>
          <div className="skills__skill">Audio Editing</div>
          <div className="skills__skill">Patching & Routing</div>
          <div className="skills__skill">Cable Management</div>                
          <div className="skills__skill">Podcast Production & Editing</div>
          <div className="skills__skill">Audiobook Editing</div>
          <div className="skills__skill">Live Audio</div>
          <div className="skills__skill">Field Recording</div>
          <div className="skills__skill">Sound Treatment</div>
          <div className="skills__skill">Effects & Amplification</div>
          <div className="skills__skill">Microphone Selection & Technique</div>
          <div className="skills__skill">Equipment Care & Maintenance</div>         
          <div className="skills__skill">Vocal Coaching</div>         
          <div className="skills__skill">Voiceover</div>
        </div>

        <h4 className="skills__content-subtitle">Film & Video Production</h4>
        <div className="skills">
          <div className="skills__skill">Videography & Cinematography</div>
          <div className="skills__skill">Video Editing</div>
          <div className="skills__skill">Color Correction</div>
          <div className="skills__skill">Film Audio & ADR</div>
          <div className="skills__skill">Scripting & Storyboarding</div>
          <div className="skills__skill">Motion Graphics</div>
          <div className="skills__skill">2D Animation</div>
          <div className="skills__skill">Video Effects & Filtering</div>
          <div className="skills__skill">Directing</div>
          <div className="skills__skill">Lighting</div>
          <div className="skills__skill">Location Scouting</div>
          <div className="skills__skill">Equipment Care & Maintenance</div>
        </div>

        <h4 className="skills__content-subtitle">Graphic Design</h4>
        <div className="skills">
          <div className="skills__skill">Logo Design</div>
          <div className="skills__skill">Event Poster Design</div>
          <div className="skills__skill">Business Card Design</div>
          <div className="skills__skill">Merchandise Design</div>
          <div className="skills__skill">Social Media Graphics</div>
          <div className="skills__skill">Photo Editing</div>
          <div className="skills__skill">Image Blending</div>
          <div className="skills__skill">Effects & Filtering</div>
          <div className="skills__skill">Masking & Composition</div>
          <div className="skills__skill">Digitization</div>
          <div className="skills__skill">Digital Illustration</div>
          <div className="skills__skill">Font Creation</div>
          <div className="skills__skill">Image Conversion</div>
          <div className="skills__skill">Preparation for Print</div>
        </div>
        
      </div>
    </div>
  )
}