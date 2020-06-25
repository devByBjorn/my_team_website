import React from 'react'

const ContactUsForm = () => {

  const submitForm = (e) => {
    e.preventDefault()
  }

  return (
    <form className="contact-us-form">
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email Adress" />
      <input type="text" placeholder="Company Name" />
      <input type="text" placeholder="Title" />
      <textarea type="text" placeholder="Message" />
      <button className="btn-primary-dark" onClick={submitForm}>submit</button>
    </form>
  )
}

export default ContactUsForm