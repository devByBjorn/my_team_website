import React from 'react'
import IconQoutes from '../images/icon-quotes.svg'


const TestimonialItem = ({ qoute, name, role, img }) => (
  <div className="testimonial-item">
    <div className="icon-qoutes">
      <img src={IconQoutes} />
    </div>
    <q className="qoute">{qoute}</q>
    <div>
      <span className="name block stand-out-word-2">{name}</span>
      <small className="role block">{role}</small>
      <div className="portrait-div">
        <img className="portrait-img" src={img} alt={`Picture of ${name}`} />
      </div>
    </div>
  </div>
)

export default TestimonialItem