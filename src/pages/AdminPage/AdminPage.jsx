import { Col, Container, Button, Row } from "react-bootstrap";
import { Authenticator } from "@aws-amplify/ui-react";
import AdminNav from "../../components/AdminNav/AdminNav";
import "./AdminPage.css";

export default function AdminPage() {
  return (
    <Authenticator hideSignUp={true}>
      {({ signOut }) => (
        <Container fluid>
          <Row className="d-none">
            <h1>Hello, welcome to my Website</h1>
            <h4>You are authenticated</h4>
            <Button className="btn btn-primary" onClick={signOut}>
              Sign Out
            </Button>
          </Row>
          <Row>
            <Col className="p-0" style={{ height: "50rem" }}>
              <AdminNav />
            </Col>
            <Col></Col>
          </Row>
        </Container>
      )}
    </Authenticator>
  );
}
