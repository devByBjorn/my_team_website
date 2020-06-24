import React from 'react'
import { Link } from 'react-router-dom'
import IconLogo from '../images/logo.svg'

const Logo = () => (
  <Link className="link" to="/">
    <div className="logo">
      <img src={IconLogo} alt="myteams's logo" />
    </div>
  </Link>
)

export default Logo