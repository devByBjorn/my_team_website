import React from 'react'
import Logo from './Logo'
import Nav from './Nav'
import ContactUsButton from './ContactUsButton'

const Header = () => (
  <header className="header content-container">
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
  </header>
)

export default Header