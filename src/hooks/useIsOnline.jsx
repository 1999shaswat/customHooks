import { useEffect } from "react"
import { useState } from "react"

export function useIsOnline() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine)

  useEffect(() => {
    const online = () => setIsOnline(true)

    const offline = () => setIsOnline(false)

    window.addEventListener("online", online)
    window.addEventListener("offline", offline)

    return () => {
      // Cleanup
      window.removeEventListener("online", online)
      window.removeEventListener("offline", offline)
    }
  }, [])

  return isOnline
}
