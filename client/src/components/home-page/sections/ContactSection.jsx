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

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData)
    fetch("https://public.herotofu.com/v1/ce6c3800-8756-11ee-b7d9-ffc4a6fbb414", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    setFormData(newForm)
  }

  return (
    <section id="contact" class="contact sec-pad dynamicBg">
      <div class="main-container">

        <h2 class="heading heading-sec heading-sec__mb-med">
          <span class="heading-sec__main heading-sec__main--lt">Contact</span>
          <span class="heading-sec__sub heading-sec__sub--lt">
            Though this website is mainly geared towards software engineering work, I am always open to discussing new projects in any of my fields of expertise (See <a href="#skills" style={{textDecoration: "underline"}}>My Skills</a>). Please use the form below to get started!
          </span>
        </h2>

        <div class="contact__form-container">
          <form action="#" class="contact__form" onSubmit={handleSubmit}>
            <div class="contact__form-field">
              <label class="contact__form-label" for="name">Name</label>
              <input
                required
                placeholder="Enter Your Name"
                type="text"
                class="contact__form-input"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div class="contact__form-field">
              <label class="contact__form-label" for="email">Email</label>
              <input
                required
                placeholder="Enter Your Email"
                type="text"
                class="contact__form-input"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div class="contact__form-field">
              <label class="contact__form-label" for="message">Message</label>
              <textarea
                required
                cols="30"
                rows="10"
                class="contact__form-input"
                placeholder="Enter Your Message"
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" class="btn btn--theme contact__btn">
              Submit
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}