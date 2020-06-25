import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import useWindowResize from '../hooks/useWindowResize'
import Logo from '../components/Logo'
import Nav from '../components/Nav'
import IconFacebook from '../images/icon-facebook.svg'
import IconPinterest from '../images/icon-pinterest.svg'
import IcontTwitter from '../images/icon-twitter.svg'
import CopyrightYear from '../components/CopyRightYear'

const Footer = () => {


  const { width, height } = useWindowResize()
  const { pathname } = useLocation()
  const [bottomFooter, setBottomFooter] = useState('')

  useEffect(() => {
    pathname === '/contact' && width > 850 && height > 950
      ? setBottomFooter('bottom-footer')
      : setBottomFooter('')
  }, [pathname, height, width])

  return (
    <footer className={`footer ${bottomFooter}`}>
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