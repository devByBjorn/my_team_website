import React, { useState } from 'react'

const DirectorCard = ({ img, name, role, qoute }) => {
  const [qouteIsVisible, setQouteIsVisible] = useState(false)

  const showQouteOnClick = () =>
    !qouteIsVisible
      ? setQouteIsVisible(true)
      : setQouteIsVisible(false)


  return (
    <div>
      <div className="director-card">
        <div><img src={img} alt={`Portrait of ${name}`} /></div>
        <span className="name">{name}</span>
        <span className="role">{role}</span>
      </div>
      <div>
        <button onClick={showQouteOnClick}>{qouteIsVisible ? '-' : '+'}</button>
        <q className="qoute" style={{ display: qouteIsVisible ? 'block' : 'none' }}>{qoute}</q>
      </div>
    </div>
  )
}

const AboutMiddleSection = ({ directors }) => (
  <section className="the-directors">
    <h3 className="sub-heading"> Meet the directors</h3>
    <div className="directors-grid">
      {directors.map(({ img, name, role, qoute }) => (
        <DirectorCard
          key={qoute}
          img={img}
          name={name}
          role={role}
          qoute={qoute}
        />
      ))}
    </div>
  </section>
)

export default AboutMiddleSection