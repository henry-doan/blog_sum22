const Page = ({ id, title, body, author, created_at, deletePage }) => {
  return (
    <li>
      <h1>{ title }</h1>
      <h3>By: { author }</h3>
      <p>{ body }</p>
      <p>
        Created: { created_at }
      </p>
      <button onClick={() => deletePage(id)}>
        Delete
      </button>
    </li>
  )
}

export default Page;