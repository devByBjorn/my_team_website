import { useState, useEffect } from 'react'

const useWindowResize = () => {
  const [windowSize, setWindowSize] = useState({ height: 0, width: 0 })

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize({ height: window.innerHeight, width: window.innerWidth })
    }
    window.addEventListener('load', handleWindowResize)
    window.addEventListener('resize', handleWindowResize)

    return () => {
      document.removeEventListener('load', handleWindowResize)
      document.removeEventListener('resize', handleWindowResize)
    }
  }, [windowSize.height, windowSize.width])

  return windowSize
}

export default useWindowResize