import React from 'react'
import ContactUsButton from './ContactUsButton'
import { NavLink } from 'react-router-dom'

const CallToAction = () => (
  <section className="call-to-action-section">
    <div className="content-container">
      <div className="call-to-action-content">
        <h3 className="call-to-action-heading">Ready to get started?</h3>
        <NavLink to="/contact" className="link-button">contact us</NavLink>
      </div>
    </div>
  </section>
)

export default CallToAction