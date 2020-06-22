import React from 'react'
import ContactUsForm from '../../components/ContactUsForm'

const AskUsAboutItem = ({ logo, text }) => (
  <li>
    <div>logo</div>
    <p>{text}</p>
  </li>
)

const ContactUsSection = () => (
  <section className="contact-us">
    <h1 className="xl-heading page-heading">Contact</h1>

    <div>
      <h3 className="sub-heading">As us about</h3>
      <ul>
        <AskUsAboutItem
          text="The quality of our talent network"
        />
        <AskUsAboutItem
          text="Usage & implementation of our software"
        />
        <AskUsAboutItem
          text="How we help drive innovation"
        />
      </ul>
    </div>

    <div>
      <ContactUsForm />
    </div>


  </section>
)

export default ContactUsSection