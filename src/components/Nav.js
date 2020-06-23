import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = ({ linksTo }) => {
  return (
    <nav className="nav-desktop-tablet">
      {linksTo.map((link) => (
        <NavLink
          className="nav-item"
          activeClassName="nav-item-active"
          key={link}
          to={`/${link.toLowerCase()}`}
        >{link}</NavLink>
      ))}
    </nav>
  )
}



export default Nav