import { useEffect } from "react"
import { useState } from "react"

export function useInterval() {
  const [sec, setSec] = useState(0)
  const [min, setMin] = useState(0)
  const [hr, setHr] = useState(0)

  useEffect(() => {
    const intSec = setInterval(() => {
      setSec((s) => (s === 59 ? 0 : s + 1))
    }, 1000)

    const intMin = setInterval(() => {
      setMin((s) => (s === 59 ? 0 : s + 1))
    }, 60 * 1000)

    const intHr = setInterval(() => {
      setHr((s) => s + 1)
    }, 60 * 60 * 1000)

    return () => {
      clearInterval(intSec)
      clearInterval(intMin)
      clearInterval(intHr)
    }
  }, [])

  return [
    String(hr).padStart(2, "0"),
    String(min).padStart(2, "0"),
    String(sec).padStart(2, "0"),
  ]
}
