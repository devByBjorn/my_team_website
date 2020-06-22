import React from 'react'
import IconQoutes from '../../images/icon-quotes.svg'
import KadyBakerJPG from '../../images/avatar-kady.jpg'
import AiyshaReeseJPG from '../../images/avatar-aiysha.jpg'
import ArthurClarkeJPG from '../../images/avatar-arthur.jpg'

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

const HomeBottomSection = () => (
  <section className="home-bottom-section">
    <div className="content-container">
      <div className="home-bottom-content">
        <h3 className="bottom-heading">
          Delivering real results for top companies. Some of our<span className="stand-out-word-2"> success stories.</span>
        </h3>
        <div className="testimonials-container">
          <TestimonialItem
            qoute="The team perfectly fit the specialized skill
            set required. They focused on the most essential features helping us launch the platform eight months faster than
            planned."
            name="Kady Baker"
            role="Product Manager at Bookmark"
            img={KadyBakerJPG}
          />

          <TestimonialItem
            qoute="We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!"
            name="Aiysha Reese"
            role="Founder of Manage"
            img={AiyshaReeseJPG}
          />

          <TestimonialItem
            qoute="Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an
            instant success with 100k downloads in the first month."
            name="Arthur Clarke"
            role="Co-founder of MyPhysio"
            img={ArthurClarkeJPG}
          />
        </div>
      </div>
    </div>
  </section>
)

export default HomeBottomSection