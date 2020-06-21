import React, { Fragment } from 'react'
import AboutTopSection from './../components/AboutTopSection'
import AboutMiddleSection from './../components/AboutMiddleSection'
import CallToAction from './../components/CallToAction'
import directors from './../data/directors'
import clients from './../data/clients'
import AboutBottomSection from '../components/AboutBottomSection'

const AboutPage = () => (
  <div className="content-container">
    <AboutTopSection />
    <AboutMiddleSection directors={directors} />
    <AboutBottomSection clients={clients} />
    <CallToAction />
  </div>
)

export default AboutPage