


export default function FoodAndHospitalityAccordion({ active, handleClick }) {



  return (
    <div>
      <button 
        className={`skills__content-title accordion${(active === "food-and-hospitality") ? " active" : ""}`}
        id="food-and-hospitality"
        onClick={handleClick}
      >Food, Hospitality, & Logistics</button>

      <div className={`panel${(active === "food-and-hospitality") ? " active" : ""}`}>

        <h4 className="skills__content-subtitle">Logistics & Delivery</h4>
        <div className="skills">
          <div className="skills__skill">COVID-19 Essential Worker Status</div>
          <div className="skills__skill">Food & Beverage Delivery</div>
          <div className="skills__skill">Food Safety</div>
          <div className="skills__skill">Road Safety</div>
          <div className="skills__skill">Mapping & Routing</div>
          <div className="skills__skill">Customer Service</div>
          <div className="skills__skill">Communications</div>
          <div className="skills__skill">Vehicle & Equipment Maintenance</div>
        </div>

        <h4 className="skills__content-subtitle">Food & Beverage</h4>
        <div className="skills">
          <div className="skills__skill">Git</div>
          <div className="skills__skill">Wordpress</div>
          <div className="skills__skill">Node.js</div>
          <div className="skills__skill">PostgreSQL</div>
          <div className="skills__skill">SQLite3</div>
          <div className="skills__skill">Rails Views</div>
          <div className="skills__skill">Vite</div>
          <div className="skills__skill">Create React App</div>
          <div className="skills__skill">VS Code</div>
          <div className="skills__skill">Postman</div>
          <div className="skills__skill">Postman</div>              
        </div>

      </div>
    </div>
  )
}