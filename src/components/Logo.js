import React from 'react'
import { Link } from 'react-router-dom'
import IconLogo from '../images/logo.svg'

const Logo = ({ className }) => (
  <Link className="link" to="/">
    <div className={`${className}`}>
      <img src={IconLogo} alt="myteams's logo" />
    </div>
  </Link>
)

export default Logo