import React from 'react'
import Logo from './Logo'
import Nav from './Nav'
import ContactUsButton from './ContactUsButton'

const Header = () => (
  <header>
    <div>
      <Logo />
      <Nav
        className="header-navigation"
        linksTo={["home", "about"]}
      />
    </div>
    <div>
      <ContactUsButton />
    </div>
  </header>
)

export default Header