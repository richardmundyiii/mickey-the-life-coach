import { useState } from "react";
import { Col, Container, Button, Row } from "react-bootstrap";
import { Authenticator } from "@aws-amplify/ui-react";
import AdminNav from "../../components/AdminNav/AdminNav";
import AdminDash from "../../components/AdminDash/AdminDash";
import AdminAllPosts from "../../components/AdminAllPosts/AdminAllPosts";
import AdminCreatePost from "../../components/AdminCreate/AdminCreatePost";
import "./AdminPage.css";

export default function AdminPage() {
  const [selectedComponent, setSelectedComponent] = useState("dashboard");

  const renderComponent = () => {
    switch (selectedComponent) {
      case "dashboard":
        return <AdminDash />;
      case "index":
        return <AdminAllPosts />;
      case "create":
        return <AdminCreatePost />;

      default:
        return null;
    }
  };
  return (
    <Authenticator hideSignUp={false}>
      {({ signOut }) => (
        <Container fluid>
          <Row className="d-none">
            <h1>Hello, welcome to my Website</h1>
            <h4>You are authenticated</h4>
            <Button className="btn btn-primary" onClick={signOut}>
              Sign Out
            </Button>
          </Row>
          <Row className="admin-page-row">
            <Col xs={12} md={2} className="p-0">
              <AdminNav setSelectedComponent={setSelectedComponent} />
            </Col>
            <Col xs={12} md={10}>
              {renderComponent()}
            </Col>
          </Row>
        </Container>
      )}
    </Authenticator>
  );
}
