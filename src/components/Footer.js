import React from 'react'
import Logo from './Logo'
import Nav from './Nav'

const Footer = () => {
  return (
    <footer>
      <Logo />
      <Nav
        className="footer-navigation"
        linksTo={["about", "home"]}
      />
    </footer>
  )
}

export default Footer