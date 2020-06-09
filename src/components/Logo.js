import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => (
  <h1 className="logo">
    <Link className="logo link" to="/home">myteam</Link>
  </h1>
)

export default Logo