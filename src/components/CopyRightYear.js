import React from 'react'

const CopyrightYear = props => {
  const now = new Date()
  const year = now.getFullYear()

  return (
    <small className="copyright-year block">{
      `Copyright ${year}. All rights reserved`
    }</small>
  )
}

export default CopyrightYear