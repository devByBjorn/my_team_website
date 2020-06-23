import React from 'react'
import Logo from './Logo'
import Nav from './Nav'
import NavMobile from './NavMobile'

const Header = () => (
  <header className="header">
    <div className="content-container" >
      <div className="header-content">
        <div className="logo-nav">
          <Logo />
          <Nav
            className="header-navigation desktop"
            linksTo={["home", "about"]}
          />
        </div>
        <div className="desktop">
          <a className="btn btn-primary-light">contact us</a>
        </div>
      </div>
    </div>
    <NavMobile />
  </header>
)

export default Header