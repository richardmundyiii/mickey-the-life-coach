import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import * as BlogApi from "../../utilities/blog-api";

export default function ViewPostComponent({ post, onClose }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updateTitle, setUpdateTitle] = useState(post.title);

  function handleCancelClick() {
    setIsEditing(false);
  }

  async function handleUpdatePost(evt) {
    evt.preventDefault();

    const updatedPost = await BlogApi.updatePost();
    setIsEditing(false);
  }

  return (
    <>
      {isEditing ? (
        <Container>
          <h1>Editing</h1>
          <Form onSubmit={handleUpdatePost}>
            <Form.Group>
              <Form.Control
                type="text"
                value={updateTitle}
                onChange={(evt) => setUpdateTitle(evt.target.value)}
              />
            </Form.Group>
            <Form.Group></Form.Group>
          </Form>
          <Button onClick={() => handleCancelClick()}>Cancel</Button>
        </Container>
      ) : (
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "90vh",
          }}
        >
          <Row>
            <Col>
              <h2>{post.title}</h2>
              <p>Date: {post.date}</p>
              <p>{post.post}</p>
              <Button
                className="btn btn-info m-2"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </Button>
              <Button onClick={onClose}>Close</Button>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}
