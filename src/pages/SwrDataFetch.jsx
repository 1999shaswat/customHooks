// uses SWR by Vercel to load data from URL

import useSWR from "swr"
import axios from "axios"

export function SwrDataFetch() {
  const fetcher = (url) => axios.get(url).then((res) => res.data)
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/todos",
    fetcher
  )

  if (isLoading) return <div>loading...</div>
  if (error) return <div>failed to load</div>

  return (
    <ol>
      {data.map((todo) => (
        <Track todo={todo} key={todo.id} />
      ))}
    </ol>
  )
}

function Track({ todo }) {
  return (
    <li>
      {todo.title} - <b>{String(todo.completed)}</b>
      <br />
      <br />
    </li>
  )
}
