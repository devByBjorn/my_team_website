import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'
import Nav from './Nav'
import NavMobile from './NavMobile'
import useScrollTopPosition from '../hooks/useScrollTopPosition'

const Header = props => {

  const topPosition = useScrollTopPosition()
  const [scrollStyleClass, setScrollStyleClass] = useState('')

  useEffect(() => {
    topPosition > 80
      ? setScrollStyleClass('scroll-style')
      : setScrollStyleClass('')
  }, [topPosition, scrollStyleClass])


  return (
    <>
      <header className={`main-header ${scrollStyleClass}`}>
        <div className="content-container" >
          <div className="header-content">
            <div className="logo-nav">
              <Logo />
              <Nav />
            </div>
            <div className="desktop">
              <NavLink to="/contact" className="btn-primary-light">contact us</NavLink>
            </div>
          </div>
        </div>
      </header>
      <NavMobile />
    </>
  )
}

export default Header