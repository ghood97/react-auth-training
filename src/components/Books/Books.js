import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import apiUrl from '../../apiConfig'

const Books = (props) => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    Axios(`${apiUrl}/books`)
      .then(res => setBooks(res.data.books))
      .then(() => props.alert({
        heading: 'Books recieved!',
        message: 'All books were recieved from the API.',
        variant: 'success'
      }))
      .catch(console.error)
  }, [])

  const booksJsx = books.map(x => (
    <li className="list-group-item" key={x._id}>
      <Link to={`/books/${x._id}`}>{x.title}</Link>
    </li>
  ))

  return (
    <ul className="list-group">
      {booksJsx}
    </ul>
  )
}

export default Books
