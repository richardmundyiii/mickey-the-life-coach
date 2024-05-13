import { Container, Row, Col, Typography } from "react-bootstrap";
import "./PlanPage.css";

export default function PlanPage() {
  return (
    <Container fluid className="pricing-container">
      <Row className="price-row">
        <Col className="intake">
          <h2>Intake Process</h2>
          <ul style={{}}>
            <li>
              We start with an in-depth Initial Intake form that explores where
              you are in and out of balance in the wellness categories
              (Emotional well-being, Nutritional & physical health,
              Spirituality, Creativity, Communication, Regaining a sense of
              FUN).
            </li>
            <hr />
            <li>
              Clients take their time answering these questions, as this Intake
              will provide a solid foundation for our work ahead.
            </li>
          </ul>
        </Col>
        <Col className="breakthrough">
          <h2>Breakthrough Package</h2>
          <ul>
            <li>
              After the Initial Intake is completed, the Breakthrough package
              consists of eight sessions (approximately one hour each). We will
              dive into each of the six wellness categories of the process and
              focus on plans, goals, and paths forward.
            </li>
            <hr />
            <li>
              The sessions are designed to illuminate the gaps of where you are
              now in life and where you want to be. And if you’re not sure where
              you want to be, I can help you understand and define your journeys
              and destinations.
            </li>
            <hr />
            <li>
              Through this work, you gain a detailed roadmap with specific
              tools, actionable techniques, and powerful resources to help you
              implement the change you desire.
            </li>
          </ul>
        </Col>
        <Col className="ongoing">
          <h2>Ongoing Packages</h2>
          <ul>
            <li>
              After the Breakthrough sessions, this package consists of five
              sessions (approximately one hour each). This ongoing work and
              guidance continuously assesses where you are out of balance in the
              six wellness categories, while also keeping you accountable to
              yourself.
            </li>
            <hr />
            <li>
              Over the course of each package, I am there for you every step of
              the way. The process is about you learning how to become the best
              version of yourself, and I am there to help you navigate those
              changes and stay focused.
            </li>
            <hr />
            <li>
              Life is constantly evolving, and the Ongoing Coaching packages
              give you the support and coaching you deserve to continue being
              resilient and cultivating the life you want.
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
