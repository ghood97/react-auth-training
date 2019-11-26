import React, { useState, useEffect, Fragment } from 'react'
import Axios from 'axios'
import apiUrl from '../../apiConfig'
import { Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

const Book = (props) => {
  const [book, setBook] = useState('')
  const userId = props.user._id

  useEffect(() => {
    Axios(`${apiUrl}/books/${props.match.params.id}`)
      .then(res => {
        setBook(res.data.book)
      })
      .then(() => props.alert({
        heading: 'Success',
        message: 'Book retrieved successfully!',
        variant: 'success'
      }))
      .catch(console.error)
  }, [])

  const handleClick = (event) => {
    event.preventDefault()
    Axios({
      method: 'DELETE',
      url: `${apiUrl}/books/${props.match.params.id}`,
      headers: {
        Authorization: `Token token=${props.user.token}`
      }
    })
      .then(res => {
        props.alert({
          heading: 'Deleted',
          message: 'Book Deleted.',
          variant: 'danger'
        })
      })
      .then(() => {
        props.history.push('/books')
      })
      .catch(console.error)
  }

  const deleteJsx = (
    <Button onClick={handleClick} variant='danger'>Delete</Button>
  )
  if (!book) {
    return <h1>Loading...</h1>
  } else {
    return (
      <Fragment>
        <h1>{book.title}</h1>
        <h4>{book.author}</h4>
        {userId === book.owner._id ? deleteJsx : ''}
      </Fragment>
    )
  }
}

export default withRouter(Book)
