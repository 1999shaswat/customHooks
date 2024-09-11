import { useInterval } from "../hooks/useInterval"

export function Timer() {
  const [hr, min, sec] = useInterval()
  return (
    <div>
      Timer: {hr}:{min}:{sec}
    </div>
  )
}
