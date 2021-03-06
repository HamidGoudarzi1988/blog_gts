import React from "react"
import { Button, Card } from "react-bootstrap"

const Post = props => {
  return (
    <div className="p-3">
      <Card>
        <Card.Img variant="top" src={props.image} alt='avatar'/>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.excerpt}</Card.Text>
          <Button variant="primary" href={props.readMore}>
            Read More!
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Post
