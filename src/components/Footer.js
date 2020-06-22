import React from 'react'
import Logo from './Logo'
import Nav from './Nav'
import IconFacebook from '../images/icon-facebook.svg'
import IconPinterest from '../images/icon-pinterest.svg'
import IcontTwitter from '../images/icon-twitter.svg'
import CopyrightYear from './CopyRightYear'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content-container">

        <div className="footer-content">
          <div className="logo-nav-adress-container">
            <div className="logo-and-nav">
              <Logo />
              <Nav
                linksTo={["about", "home"]}
              />
            </div>
            <div className="adress">
              <small className="adress-row block">987 Hillcrest Lane</small>
              <small className="adress-row block">Irvine, CA</small>
              <small className="adress-row block">California 92714</small>
              <small className="adress-row block">Call us: 949-833-7432</small>
            </div>
          </div>

          <div className="social-copyright-container">
            <div className="social">
              <div className="social-item">
                <img src={IconFacebook} alt="facebook icon" />
              </div>
              <div className="social-item">
                <img src={IconPinterest} alt="pinterest icon" />
              </div>
              <div className="social-item">
                <img src={IcontTwitter} alt="twitter icon" />
              </div>
            </div>
            <div className="copyright">
              <CopyrightYear />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer