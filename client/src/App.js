import { useEffect, useState } from 'react';
import axios from 'axios';
import Page from './components/pages/Page';
import PageNew from './components/pages/PageNew';

const App = () => {
  const [pages, setPages] = useState([])

  useEffect( () => {
    axios.get('/api/pages')
      .then( res => setPages(res.data) )
      .catch( err => console.log(err))
  }, [])

  const addPage = (page) => {
    axios.post('/api/pages', { page })
      .then( res => setPages([...pages, res.data]))
      .catch( err => console.log(err))
  }

  return (
    <>
      <h1>All Pages</h1>
      <PageNew addPage={addPage} />
      <ul>
        {
          pages.map( p => (
            // <Page key={p.id} title={p.title} author={p.author} body={p.body} id.. create_at, update_at />
            <Page key={p.id} {...p} />
          ))
        }
      </ul>
    </>
  )
}

export default App;
