import React from 'react'
import Logo from './Logo'
import Nav from './Nav'
import NavMobile from './NavMobile'
import { NavLink } from 'react-router-dom'

const Header = props => {
  // HEADER FIXED ON SCROLL 
  return (
    <header>
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
      <NavMobile />
    </header>
  )
}

export default Header