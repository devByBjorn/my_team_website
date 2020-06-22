import React, { Fragment } from 'react'
import CallToAction from '../../components/CallToAction'
import HomeMiddleSection from './HomeMiddleSection'
import HomeBottomSection from './HomeBottomSection'
import HomeTopSection from './HomeTopSection'

const HomePage = () => (
  <div >
    <HomeTopSection />
    <HomeMiddleSection />
    <HomeBottomSection />
    <CallToAction />
  </div>
)


export default HomePage