import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <Container fluid className="footer-container d-none d-md-block">
        <Row className="footer-social">
          <Col>Connect with me on my social networks:</Col>
          <Col style={{ textAlign: "right" }}>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-instagram"></i>
            <i class="bi bi-youtube"></i>
          </Col>
        </Row>
        <Row className="footer-main">
          <Col>
            <h3>Mickey The Life Coach</h3>
            <hr />
            <p>
              Transforming you from inside out to live a more meaningful and
              happy life.
            </p>
          </Col>
          <Col>
            <h3>Useful Links</h3>
            <hr />
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Plans</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
          </Col>
          <Col className="footer-s">
            <div>
              <h3>Contact</h3>
              <hr />
            </div>
            <div>
              <Row>
                <Col xs={3}>
                  <i class="bi bi-envelope-at"></i>
                </Col>
                <Col className="footer-contacts">
                  <p>MickeyTheLifeCoach@gmail.com</p>
                </Col>
              </Row>
              <Row>
                <Col xs={3}>
                  <i class="bi bi-telephone"></i>
                </Col>
                <Col className="footer-contacts">
                  <p>+1 (831) 430-8985</p>
                </Col>
              </Row>
              <Row>
                <Col xs={3}>
                  <i class="bi bi-house"></i>
                </Col>
                <Col className="footer-contacts">
                  <p>Santa Cruz, CA</p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row className="footer-copyright">
          <p>© 2024 Copyright: MickeyTheLifeCoach.com</p>
        </Row>
      </Container>
      <Container className="footer-container-mobile d-block d-md-none">
        <Row className="footer-social-mobile p-2">
          <Col>Connect with me on social networks: </Col>
          <Col style={{ display: "flex", flexDirection: "row" }}>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-instagram"></i>
            <i class="bi bi-youtube"></i>
          </Col>
        </Row>
        <Row fluid className="footer-copyright-mobile p-2">
          <h6>© 2024 Copyrights: MickeytheLifeCoach.com</h6>
        </Row>
      </Container>
    </>
  );
}
