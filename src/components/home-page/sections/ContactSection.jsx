import { useState } from "react"

export default function ContactSection() {

  const newForm = {
    name: "",
    email: "",
    message: ""
  }

  const [formData, setFormData] = useState(newForm)

  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value})
    console.log(formData)
  }

  const [success, setSuccess] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    emailjs.send("mds_gmail", "contact_form_mds", formData, import.meta.env.VITE_CONTACT_FORM_KEY)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      setFormData(newForm)
      setSuccess(true)
   }, function(error) {
      console.log('FAILED...', error);
      setSuccess(false)
   });
  }

  return (
    <section id="contact" className="contact sec-pad-last dynamicBg">
      <div className="main-container">

        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main heading-sec__main--lt">Contact</span>
          <span className="heading-sec__sub heading-sec__sub--lt">
            Though this website is mainly geared towards software engineering work, I am always open to discussing new projects in any of my <a href="#skills" style={{textDecoration: "underline"}}>fields of expertise</a>. Please use the form below to get started!
          </span>
        </h2>

        <div className="contact__form-container">
          <form action="#" className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="name">Name</label>
              <input
                required
                placeholder="Enter Your Name"
                type="text"
                className="contact__form-input"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="email">Email</label>
              <input
                required
                placeholder="Enter Your Email"
                type="text"
                className="contact__form-input"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="message">Message</label>
              <textarea
                required
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Enter Your Message"
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            
            {(success != "") ? (
              (success) ? (
                <p className="contact__form-status success">Contact form submitted successfully! I will be in touch as soon as I can!</p>
              ) : (
                <p className="contact__form-status error">There was an error submitting the contact form. Please check your entry and try again, or reach out on <a href="https://www.linkedin.com/in/mikedavissoftware">LinkedIn</a>.</p>
              )
            ) : (null)
            }

            <button type="submit" className="btn btn--theme contact__btn">
              Submit
            </button>
          </form>
        </div>
        {}
      </div>
    </section>
  )
}