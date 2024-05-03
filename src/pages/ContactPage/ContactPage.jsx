import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "../../components/ContactForm/ContactForm";
import ProfilePhoto from "../../images/AboutPhoto.png";
import "./ContactPage.css";

export default function ContactPage() {
  return (
    <Container style={{ minHeight: "80vh" }} className="contact-container">
      <Row>
        <Col>
          <ContactForm />
        </Col>
        <Col>
          <Row>
            <img src={ProfilePhoto} alt="..." style={{ height: "20rem" }} />
          </Row>
          <Row>
            <h4 style={{ backgroundColor: "ButtonFace", width: "100%" }}>
              (831) 111 - 1234
            </h4>
            <br />
            <h4>mickeythelifecoach@gmail.com</h4>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
