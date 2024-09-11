// Data fetching hook that get the data when url is passed

import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

export function useFetchData(url) {
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    axios.get(url).then((res) => {
      setResponse(res.data.slice(0, 10))
      setLoading(false)
    })
  }, [])
  return [response, loading]
}
