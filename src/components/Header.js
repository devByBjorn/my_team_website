import React from 'react'
import Logo from './Logo'
import Nav from './Nav'
import NavMobile from './NavMobile'
import IconHamburger from '../images/icon-hamburger.svg'

const Header = () => (
  <header className="header">
    <div className="content-container" >
      <div className="header-content">
        <div className="logo-nav">
          <Logo />
          <Nav
            className="header-navigation"
            linksTo={["home", "about"]}
          />
        </div>
        <div>
          <a className="btn btn-primary-light">contact us</a>
        </div>
        <div className="hamburger">
          <img src={IconHamburger} alt="hamburger menu icon" />
        </div>
      </div>
    </div>
  </header>
)

export default Header