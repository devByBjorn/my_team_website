import React from 'react'
import IconPerson from '../../images/icon-person.svg'
import IconChart from '../../images/icon-chart.svg'
import IconCog from '../../images/icon-cog.svg'
import ContactUsForm from '../../components/ContactUsForm'
import PitchItem from '../../components/PitchItem'

const ContactUsSection = () => (
  <section className="contact-us-section">
    <div className="content-container">
      <div className="contact-us-content">

        <div className="flex-item">
          <h2>Contact</h2>
          <h3>Ask us about</h3>
          <div>
            <PitchItem
              logo={IconPerson}
              alt="Icon of a person"
              heading=""
              text="The quality of our talent network"
            />
            <PitchItem
              logo={IconChart}
              alt="Icon of a chart"
              heading=""
              text="Usage & implementation of our software"
            />
            <PitchItem
              logo={IconCog}
              alt="Icon of a cog"
              heading=""
              text="How we help drive innovation"
            />
          </div>
        </div>
        <div className="flex-item">
          <ContactUsForm />
        </div>
      </div>
    </div>
  </section>
)

export default ContactUsSection