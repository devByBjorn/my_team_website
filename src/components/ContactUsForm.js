import React from 'react'

const ContactUsForm = () => {

  const submitForm = (e) => {
    e.preventDefault()
  }
  return (
    <form>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email Adress" />
      <input type="text" placeholder="Company Name" />
      <input type="text" placeholder="Title" />
      <textarea type="text" placeholder="Title" />
      <button onClick={submitForm}>Submit</button>
    </form>
  )
}

export default ContactUsForm