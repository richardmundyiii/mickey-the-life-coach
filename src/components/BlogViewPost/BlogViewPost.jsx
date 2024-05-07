import { Button, Col, Container, Row } from "react-bootstrap";
import CloseButton from "react-bootstrap/CloseButton";
import "./BlogViewPost.css";

export default function BlogViewPost({ post, onClose }) {
  return (
    <Container
      style={{
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Row className="d-none d-md-block">
        <Col>
          <h2>{post.title}</h2>
          <p>{post.post}</p>
          <Button variant="outline-secondary" onClick={onClose}>
            Close
          </Button>
        </Col>
      </Row>
      <Row className="d-block d-md-none">
        <Col>
          <h2>{post.title}</h2>
          <p>{post.post}</p>
          <Button variant="outline-secondary" onClick={onClose}>
            Close
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
