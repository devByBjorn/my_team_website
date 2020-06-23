import React from 'react'

const PitchItem = ({ logo, heading, text, alt }) => (
  <div className="pitch-item">
    <div className="icon-container">
      <img className="icon" src={logo} alt={`${alt}`}></img>
    </div>
    <div className="text">
      <h6 className="pitch-heading stand-out-word">{heading}</h6>
      <p className="paragraph">{text}</p>
    </div>
  </div>
)

export default PitchItem