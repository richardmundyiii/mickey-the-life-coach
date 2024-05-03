import { useState } from "react";
import { Container, Row, Col, Carousel, Card } from "react-bootstrap";
import CarouselComponent from "../../components/CarouselComponent/CarouselComponent";
import TreeLogo from "../../images/tree.png";
import AboutPhoto from "../../images/AboutPhoto.png";
import BeachPhoto from "../../images/beach.jpg";
import VennDiagrams from "../../images/venn.png";
import "./HomePage.css";
import ContactForm from "../../components/ContactForm/ContactForm";

export default function HomePage() {
  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    comment: "",
  });

  function handleChange(evt) {
    setContactForm({
      ...contactForm,
      [evt.target.name]: evt.target.value,
    });
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
  }
  return (
    <Container fluid className="homepage-container">
      <Row className="d-none d-md-block">
        <div className="homepage-head">
          <Col xs={4}>
            <h2>Live</h2>
            <h2>A More</h2>
            <h2>Meaningful</h2>
            <h2>Life</h2>
          </Col>
          <Col>
            <img src={TreeLogo} alt="..." />
          </Col>
        </div>
      </Row>
      <Row className="d-block d-md-none">
        <div className="homepage-head-mobile">
          <Col>
            <h2>Live A More</h2>
            <h2>Meaningful Life</h2>
          </Col>
          <Col xs={4}>
            <img src={TreeLogo} alt="..." />
          </Col>
        </div>
      </Row>
      <Row className="d-none d-md-block mt-5">
        <p className="px-5" style={{ fontWeight: "bold", fontSize: "2.5rem" }}>
          I help men of all ages overcome stress, depression, and disapointment.
          Improve your personal and prefessional relationships, create a
          brighter career, and a greater sense of meaning & fulfillment.
        </p>
        <div className="py-5 homepage-about">
          <Col>
            <h4>
              The "midlife crisis" - stress, anxiety, burnout - is a significant
              problem for thousands of men. But it doesn't have to be. You can
              thrive again, have fun again - and here is a process & path that
              helps you get there.
            </h4>
          </Col>
          <Col>
            <img src={BeachPhoto} alt="..." style={{ borderRadius: "50%" }} />
          </Col>
          <Col>
            <h4>
              What's the outcome? You’re more excited to get up every morning.
              You feel more connected to yourself & those around you. You get
              into better shape & feel healthier. You feel more purpose &
              meaning. And I'm there for you every step of the way.
            </h4>
          </Col>
        </div>
      </Row>
      <Row className="d-block d-md-none py-5">
        <Col className="px-5">
          <p style={{ fontWeight: "bold" }}>
            I help men of all ages overcome stress, depression, and
            disapointment. Improve your personal and prefessional relationships,
            create a brighter career, and a greater sense of meaning &
            fulfillment.
          </p>
          <h6>
            The "midlife crisis" - stress, anxiety, burnout - is a significant
            problem for thousands of men. But it doesn't have to be. You can
            thrive again, have fun again - and here is a process & path that
            helps you get there.
          </h6>
          <h6>
            What's the outcome? You’re more excited to get up every morning. You
            feel more connected to yourself & those around you. You get into
            better shape & feel healthier. You feel more purpose & meaning. And
            I'm there for you every step of the way.
          </h6>
          <img
            src={BeachPhoto}
            alt="..."
            style={{ width: "100%", borderRadius: "50%", paddingTop: "2rem" }}
          />
        </Col>
      </Row>
      <Row className="d-none d-md-block mt-5">
        <div className="py-5 homepage-venn">
          <Col>
            <img
              src={VennDiagrams}
              alt="..."
              style={{ width: "100%", height: "auto" }}
            />
          </Col>
          <Col>
            <h4>
              In the realm of relationships, three Venn diagrams illustrate
              distinct dynamics. The first shows separate circles for "you" and
              "them," devoid of overlap, symbolizing individuals without common
              ground or happiness. The second, a single circle, depicts
              integration at the cost of personal identity, leaving both parties
              unfulfilled. However, it's the third diagram that embodies true
              fulfillment. Here, two circles slightly overlap, representing
              individual lives and a shared one. In this delicate balance,
              happiness flourishes as both maintain autonomy while nurturing a
              vibrant shared life. It's within this interplay of independence
              and unity that the most fulfilling relationships thrive, fostering
              mutual understanding and growth.
            </h4>
          </Col>
        </div>
      </Row>
      <Row className="d-block d-md-none py-5 homepage-venn-mobile">
        <Col className="px-5">
          <img
            src={VennDiagrams}
            alt="..."
            style={{ width: "100%" }}
            className="py-5"
          />
          <h6>
            In the realm of relationships, three Venn diagrams illustrate
            distinct dynamics. The first shows separate circles for "you" and
            "them," devoid of overlap, symbolizing individuals without common
            ground or happiness. The second, a single circle, depicts
            integration at the cost of personal identity, leaving both parties
            unfulfilled. However, it's the third diagram that embodies true
            fulfillment. Here, two circles slightly overlap, representing
            individual lives and a shared one. In this delicate balance,
            happiness flourishes as both maintain autonomy while nurturing a
            vibrant shared life. It's within this interplay of independence and
            unity that the most fulfilling relationships thrive, fostering
            mutual understanding and growth.
          </h6>
        </Col>
      </Row>
      <Row className="d-none d-md-block homepage-testimonials">
        <Col>
          <h2 className="mt-5">Testimonials</h2>
          <CarouselComponent />
        </Col>
      </Row>
      <Row className="d-block d-md-none homepage-testimonials-mobile">
        <Col>
          <h2 className="mt-5">Testimonials</h2>
          <CarouselComponent />
        </Col>
      </Row>
      <Row className="d-none d-md-block">
        <div className="homepage-contact">
          <Col>
            <h2>Free Consultation</h2>
            <p className="p-5">
              Leave me a message and I will be in contact within the next 24
              hours. Leave me a message on when is a good time for you to
              recieve your free, no obligation, consultation.
            </p>
          </Col>
          <Col className="p-5">
            <ContactForm />
          </Col>
        </div>
      </Row>
      <Row className="d-block d-md-none">
        <div className="pt-5 homepage-contact-mobile">
          <Col>
            <h2>Free Consultation</h2>
            <p className="p-1">
              Leave me a message and I will be in contact within the next 24
              hours. Leave me a message on when is a good time for you to
              recieve your free, no obligation, consultation.
            </p>
          </Col>
          <Col className="p-2 pb-3">
            <ContactForm />
          </Col>
        </div>
      </Row>
    </Container>
  );
}
