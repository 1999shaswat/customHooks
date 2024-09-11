import { useFetchData } from "../hooks/useFetchData"

export function DataFetching() {
  const [todos, loading] = useFetchData(
    "https://jsonplaceholder.typicode.com/todos"
  )

  return loading ? (
    <p>loading...</p>
  ) : (
    <ol>
      {todos.map((todo) => (
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
