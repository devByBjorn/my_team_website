import React, { Fragment } from 'react'
import CallToAction from './../components/CallToAction'
import HomeMiddleSection from './../components/HomeMiddleSection'
import HomeBottomSection from './../components/HomeBottomSection'
import HomeTopSection from '../components/HomeTopSection'

const HomePage = () => {
  return (
    <div className="sections-container">
      <HomeTopSection />
      <HomeMiddleSection />
      <HomeBottomSection />
      <CallToAction />
    </div>
  )
}

export default HomePage