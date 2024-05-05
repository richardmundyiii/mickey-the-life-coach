import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import RTE from "../RTE/RTE";

export default function AdminCreatePost() {
  const [newPost, setNewPost] = useState({
    title: "",
    post: "",
  });

  function handleChange(evt) {
    setNewPost({
      ...newPost,
      [evt.target.name]: evt.target.value,
    });
  }

  async function handleSavePost(evt) {
    evt.preventDefault();
  }

  return (
    <Container
      style={{
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Row>
        <Col>
          <h3>Create Post</h3>
        </Col>
      </Row>
      <Row>
        <Form onSubmit={handleSavePost}>
          <InputGroup className="my-3">
            <FormControl type="text" placeholder="Post Title..." />
          </InputGroup>
          <RTE />
          <Button className="btn btn-primary mt-3" style={{ width: "100%" }}>
            Save
          </Button>
        </Form>
      </Row>
    </Container>
  );
}
