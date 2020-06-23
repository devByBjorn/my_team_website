import React, { Fragment } from 'react'
import AboutTopSection from './AboutTopSection'
import AboutMiddleSection from './AboutMiddleSection'
import CallToAction from '../../components/CallToAction'
import directors from '../../data/directors'
import clients from '../../data/clients'
import AboutBottomSection from './AboutBottomSection'

const AboutPage = () => (
  <div>
    <AboutTopSection />
    <AboutMiddleSection directors={directors} />
    <AboutBottomSection clients={clients} />
    <CallToAction />
  </div>
)

export default AboutPage