import { useState } from 'react';

const PageNew = ({ addPage }) => {
  const [page, setPage] = useState({ title: '', author: '', body: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    addPage(page)
    setPage({ title: '', author: '', body: '' })
  }

  return (
    <>
      <h1>New Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Title'
          type='text'
          name='title'
          value={page.title}
          onChange={(e) => setPage({ ...page, title: e.target.value })}
          required
        />
        <input
          placeholder='Author'
          type='text'
          name='author'
          value={page.author}
          onChange={(e) => setPage({ ...page, author: e.target.value })}
          required
        />
        <textarea
          placeholder='Body'
          name='body'
          value={page.body}
          onChange={(e) => setPage({ ...page, body: e.target.value })}
          required
        ></textarea>
        <button type='submit'>Add Page</button>
      </form>
    </>
  )
}

export default PageNew;