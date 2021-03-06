import React from 'react'
import IconPerson from '../../images/icon-person.svg'
import IconChart from '../../images/icon-chart.svg'
import IconCog from '../../images/icon-cog.svg'
import PitchItem from '../../components/PitchItem'


const HomeMiddleSection = () => (
  <section className="home-middle-section">
    <div className="content-container">
      <div className="line" />
      <div className="home-middle-content">
        <div className="flex-item">
          <h3>
            Build & manage
            distributed teams
            like no one else.
          </h3>
        </div>

        <div className="pitches flex-item">
          <PitchItem
            logo={IconPerson}
            alt="Icon of a person"
            heading="Experienced Individuals"
            text="Our network is made up of highly experienced professionals who are passionate about what they do"
          />
          <PitchItem
            logo={IconChart}
            alt="Icon of a chart"
            heading="Easy to Implement"
            text="Our processes have been refined over years of implementation meaning our teams always deliver."
          />
          <PitchItem
            logo={IconCog}
            alt="Icon of a cog"
            heading="Enhanced Productivity"
            text="Our customized platform with in-built analytics helps you manage your distributed teams."
          />
        </div>
      </div>
    </div>
  </section>
)

export default HomeMiddleSection