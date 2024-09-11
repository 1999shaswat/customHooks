import { useState } from "react"
import { useDebounce } from "../hooks/useDebounce"

export function DebouncedInput() {
  const [inputValue, setInputValue] = useState("")
  const debouncedRes = useDebounce(inputValue, 500)

  return (
    <div>
      <input type="text" onChange={(e) => setInputValue(e.target.value)} />
      <div>Debounced Input: {debouncedRes}</div>
    </div>
  )
}
