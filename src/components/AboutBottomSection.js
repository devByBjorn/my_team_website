import React from 'react'


const AboutBottomSection = ({ clients }) => (
  <section className="clients">
    <h3 className="sub-heading">Some of pur clients</h3>
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
  </section>
)

export default AboutBottomSection