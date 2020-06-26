import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = ({ className, itemClassName }) => {
  return (
    <nav className={`${className}`}>
      <NavLink to="/" className={`${itemClassName}`}>home</NavLink>
      <NavLink to="/about" className={`${itemClassName}`}>about</NavLink>
    </nav>
  )
}



export default Nav