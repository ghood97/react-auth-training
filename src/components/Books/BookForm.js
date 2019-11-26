import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BookForm = (props) => {
  return (
    <Form onSubmit={props.handleSubmit}>
      <Form.Group controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          required
          name="title"
          value={props.book.title}
          type="text"
          placeholder="Title"
          onChange={props.handleChange}
        />
      </Form.Group>
      <Form.Group controlId="author">
        <Form.Label>Author</Form.Label>
        <Form.Control
          required
          name="author"
          value={props.book.author}
          type="text"
          placeholder="Author"
          onChange={props.handleChange}
        />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
      >
        Submit
      </Button>
      <Link to={props.cancelPath}><Button variant='danger'>Cancel</Button></Link>
    </Form>
  )
}

export default BookForm
