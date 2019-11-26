import React, { useState } from 'react'
import BookForm from './BookForm'
import Axios from 'axios'
import apiUrl from '../../apiConfig'
import { withRouter } from 'react-router-dom'

const BookCreate = (props) => {
  const [book, setBook] = useState({ title: '', author: '' })

  const handleChange = event => {
    event.persist()
    setBook({ ...book, [event.target.name]: event.target.value })
  }

  const handleSubmit = () => {
    event.preventDefault()
    Axios({
      method: 'POST',
      url: `${apiUrl}/books`,
      headers: {
        Authorization: `Token token=${props.user.token}`
      },
      data: { book }
    })
      .then(res => {
        props.alert({
          heading: 'Created',
          message: 'Book created.',
          variant: 'success'
        })
        props.history.push(`/books/${res.data.book._id}`)
      })
      .catch(console.error)
  }

  return (
    <div>
      <h1>Create A Book</h1>
      <BookForm cancelPath='/books' book={book} handleChange={handleChange} handleSubmit={handleSubmit}/>
    </div>
  )
}

export default withRouter(BookCreate)
