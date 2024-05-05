import { Col, Container, Row } from "react-bootstrap";
import BGLogo from "../../images/bgLogo.png";

export default function AdminDash() {
  return (
    <Container
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Row>
        <Col>
          <img src={BGLogo} alt="..." style={{ opacity: "5%" }} />
        </Col>
      </Row>
    </Container>
  );
}
