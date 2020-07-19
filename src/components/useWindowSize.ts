import { useState, useEffect } from 'react'

export default function useWindowSize() {
  const isClient = typeof window === 'object'

  const [windowSize, setWindowSize] = useState({
    width: isClient ? window.innerWidth : 100,
    height: isClient ? window.innerHeight : 100,
  })

  useEffect(() => {
    if (typeof window !== 'object') {
      return
    }

    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, []) // empty array ensures that effect is only run on mount and unmount

  return windowSize
}
