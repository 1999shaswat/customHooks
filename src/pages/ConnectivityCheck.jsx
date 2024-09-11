import { useIsOnline } from "../hooks/useIsOnline"
import { useMousePosition } from "../hooks/useMousePosition"
import { useWindowDimension } from "../hooks/useWindowDimension"

export function WindowUtils() {
  const status = useIsOnline()
  const mousePosition = useMousePosition()
  const windowDimension = useWindowDimension()

  return (
    <div>
      <div>Connection Status: {status ? "Online" : "Offline"}</div>
      <div>Mouse Position {JSON.stringify(mousePosition)}</div>
      <div>Window Dimensions {JSON.stringify(windowDimension)}</div>
    </div>
  )
}
