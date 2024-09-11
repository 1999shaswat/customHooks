import { useEffect } from "react"
import { useState } from "react"

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      // Cleanup
      window.addEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return mousePosition
}
