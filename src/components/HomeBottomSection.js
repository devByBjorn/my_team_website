import React from 'react'

const TestimonialItem = ({ qoute, name, role, img }) => (
  <div className="testimonial">
    <q className="qoute">{qoute}</q>
    <div>
      <span className="block-span name">{name}</span>
      <span className="block-span role">{role}</span>
      <div className="portrait">
        <img src={img} alt={`Picture of ${name}`} />
      </div>
    </div>
  </div>
)

const HomeBottomSection = () => (
  <section className="section testimonials">
    <h3 className="sub-heading">Delivering real results for top companies.
    Some of our <span>success stories.</span></h3>

    <div className="container">
      <TestimonialItem
        qoute="The team perfectly fit the specialized skill
        set required. They focused on the most essential features helping us launch the platform eight months faster than
        planned."
        name="Kady Baker"
        role="Product Manager at Bookmark"
        img={"img"}
      />

      <TestimonialItem
        qoute="We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!"
        name="Aiysha Reese"
        role="Founder of Manage"
        img={"img"}
      />

      <TestimonialItem
        qoute="Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an
      instant success with 100k downloads in the first month."
        name="Arthur Clarke"
        role="Co-founder of MyPhysio"
        img={"img"}
      />
    </div>
  </section>
)

export default HomeBottomSection