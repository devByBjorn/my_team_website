import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <header>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/contact">Contact</NavLink>
  </header>
)

export default Header