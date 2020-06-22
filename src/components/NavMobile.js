import React, { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const NavMobile = props => {
  const node = useRef()
  const [width, setWidth] = useState('0')

  return (
    <div className="nav-mobile-container" ref={node}>
      <nav
        className="mobile-nav"
        style={{ width: width }}
      >
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </nav>
      <button className="btn btn-primary-dark">Contact</button>
    </div>
  )
}

export default NavMobile