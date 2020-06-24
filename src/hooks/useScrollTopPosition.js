import { useState, useEffect } from 'react'

const useScrollTopPosition = () => {
  const [scrollTopPosition, setScrollTopPosition] = useState(0)

  useEffect(() => {
    const handleScrollMove = () => {
      setScrollTopPosition(window.scrollY)
    }
    document.addEventListener('scroll', handleScrollMove)

    return () => {
      document.removeEventListener('scroll', handleScrollMove)
    }
  }, [scrollTopPosition])

  return scrollTopPosition
}

export default useScrollTopPosition