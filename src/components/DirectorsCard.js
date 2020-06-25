import React, { useState } from 'react'
import IconCross from '../images/icon-cross.svg'
import IconLinkedIn from '../images/icon-linkedin.svg'
import IconTwitter from '../images/icon-twitter.svg'


const DirectorCard = ({ img, name, role, qoute }) => {
  const [qouteIsVisible, setQouteIsVisible] = useState(false)
  const [rotateCross, setRotateCross] = useState('0deg')
  const [activeBtn, setActiveBtn] = useState('')

  const showQouteOnClick = () => {
    if (!qouteIsVisible) {
      setQouteIsVisible(true)
      setRotateCross('45deg')
      setActiveBtn('active-btn')
    } else {
      setQouteIsVisible(false)
      setRotateCross('0deg')
      setActiveBtn('')
    }
  }
  return (
    <div className="director-card">
      <div className="director-card-content">
        {qouteIsVisible
          ? (

            <div className="qoute-container">
              <span className="stand-out-word-2 block">{name}</span>
              <q className="qoute"
                style={{ display: qouteIsVisible ? 'block' : 'none' }}
              >{qoute}</q>
              <div className="social">
                <div className="twitter" />
                <div className="linkedIn" />
                {/*<img src={IconTwitter} />
          <img src={IconLinkedIn} />*/}
              </div>
            </div>

          )
          : (
            <>
              <div className="portrait-div"><img src={img} alt={`Portrait of ${name}`} /></div>
              <span className="stand-out-word-2 block">{name}</span>
              <small className="role block">{role}</small>
            </>
          )
        }
      </div>
      <button className={`qoute-btn ${activeBtn}`}
        onClick={showQouteOnClick}
        style={{ background: activeBtn }}
      >
        <div className="cross" style={{ transform: `rotate(${rotateCross})` }}>
          <img src={IconCross} />
        </div>
      </button>
    </div >
  )
}

export default DirectorCard