import React from 'react'

const PitchItem = ({ logo, heading, text }) => (
  <div>
    <div>{logo}</div>
    <h6>{heading}</h6>
    <p>{text}</p>
  </div>
)

const HomeMiddleSection = () => (
  <section className="section how-we-work">
    <h3 className="sub-heading">Build & manage distributed teams like no one else</h3>
    <div className="pitches">
      <PitchItem
        logo="logo"
        heading="Experienced Individuals"
        text="Our network is made up of highly experienced professionals who are passionate about what they do"
      />
      <PitchItem
        logo="logo"
        heading="Easy to Implement"
        text="Our processes have been refined over years of implementation meaning our teams always deliver."
      />
      <PitchItem
        logo="logo"
        heading="Enhanced Productivity"
        text="Our customized platform with in-built analytics helps you manage your distributed teams."
      />
    </div>
  </section>
)

export default HomeMiddleSection