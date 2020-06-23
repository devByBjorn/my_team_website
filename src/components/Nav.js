import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = props => {
  return (
    <nav className="nav-desktop-tablet">
      <NavLink to="/" className="nav-item">home</NavLink>
      <NavLink to="/about" className="nav-item">about</NavLink>
    </nav>
  )
}



export default Nav