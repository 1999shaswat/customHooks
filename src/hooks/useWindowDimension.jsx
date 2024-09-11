import { useEffect } from "react"
import { useState } from "react"

export function useWindowDimension() {
  const [windowDimension, setWindowDimension] = useState({
    w: window.innerWidth,
    h: window.innerHeight,
  })

  const handleResize = (e) => {
    setWindowDimension({ w: window.innerWidth, h: window.innerHeight })
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)

    return () => {
      // Cleanup
      window.addEventListener("resize", handleResize)
    }
  }, [])

  return windowDimension
}
