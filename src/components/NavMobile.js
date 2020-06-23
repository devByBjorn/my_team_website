import React, { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import IconHamburger from '../images/icon-hamburger.svg'
import IconClose from '../images/icon-close.svg'

const NavMobile = props => {
  const node = useRef()
  const [menuWidth, setMenuWidth] = useState('0rem')
  const [overlayWidth, setOverlayWidth] = useState('0rem')

  const toggleMenu = () => {
    if (menuWidth === '0rem') {
      setMenuWidth('70%')
      setOverlayWidth('30%')
    } else {
      setMenuWidth('0rem')
      setOverlayWidth('0rem')
    }
  }

  const toggleOnOutsideClick = e => {
    if (node.current.contains(e.target)) {
      return
    }
    setMenuWidth('0rem')
    setOverlayWidth('0rem')
  }

  useEffect(() => {
    document.addEventListener('mousedown', toggleOnOutsideClick)
    return () => document.removeEventListener('mousedown', toggleOnOutsideClick)

  }, [])

  return (
    <>
      <div className="nav-mobile-container" ref={node}>
        <button
          className="hamburger-close-btn"
          onClick={toggleMenu}>
          {menuWidth === '0rem'
            ? (<img src={IconHamburger} alt="hamburger menu icon" />)
            : (<img src={IconClose} alt="close menu icon" />)}
        </button>
        <nav
          className="nav-mobile"
          style={{ width: menuWidth }}
        >
          <ul>
            <li><NavLink to="/">home</NavLink></li>
            <li><NavLink to="/about">about</NavLink></li>
            <div>
              <NavLink to="/contact" className="btn btn-primary-light">contact us</NavLink>
            </div>
          </ul>
        </nav>
      </div>
      <div className="background-overlay"
        style={{ width: overlayWidth }}
      />
    </>
  )
}

export default NavMobile