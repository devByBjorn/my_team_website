import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import useScrollTopPosition from '../hooks/useScrollTopPosition'

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation()
  const topPosition = useScrollTopPosition()

  useEffect(() => {
    if (topPosition > 0) window.scrollTo(0, 0)
  }, [pathname])

  return children
}

export default ScrollToTop