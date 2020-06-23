import React from 'react'
import DirectorCard from '../../components/DirectorsCard'


const AboutMiddleSection = ({ directors }) => (
  <section className="about-middle-section">
    <div className="content-container">
      <div className="about-middle-content">
        <h3>Meet the directors</h3>
        <div className="directors-grid">
          {directors.map(({ img, name, role, qoute }) => (
            <div className="grid-item" key={qoute}>
              <DirectorCard
                img={img}
                name={name}
                role={role}
                qoute={qoute}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default AboutMiddleSection