import React from 'react'

const AboutBottomSection = ({ clients }) => (
  <section className="about-bottom-section">
    <div className="content-container">
      <div className="about-bottom-content">
        <h3>Some of our clients</h3>
        <ul>
          {clients.map(({ name, logo }) => (
            <li key={name}>
              <img
                alt={`Logo of ${name}`}
                src={logo}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
)

export default AboutBottomSection