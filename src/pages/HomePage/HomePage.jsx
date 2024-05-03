import { useState } from "react";
import { Container, Row, Col, Carousel, Card } from "react-bootstrap";
import TreeLogo from "../../images/tree.png";
import AboutPhoto from "../../images/AboutPhoto.png";
import "./HomePage.css";
import ContactForm from "../../components/ContactForm/ContactForm";

export default function HomePage() {
  const [index, setIndex] = useState(0);
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

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

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
            <img src={AboutPhoto} alt="..." />
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
          <img src={AboutPhoto} alt="..." style={{ width: "100%" }} />
        </Col>
      </Row>
      <Row className="d-none d-md-block">
        <div className="homepage-testimonials p-5">
          <Row style={{ color: "white" }}>
            <h2 style={{ justifyContent: "center" }}>Testimonials</h2>
          </Row>
          <Row>
            <Carousel
              data-bs-theme="light"
              activeIndex={index}
              onSelect={handleSelect}
              style={{ borderRadius: "30px" }}
            >
              <Carousel.Item>
                <Card
                  className="text-center"
                  style={{
                    height: "20rem",
                  }}
                >
                  <Card.Body
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      fontSize: "1.5rem",
                    }}
                  >
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      In, minus consequatur maxime dicta nulla inventore enim at
                      ducimus iusto eligendi sunt repudiandae aspernatur
                      suscipit velit, ratione officiis natus assumenda
                      cupiditate!
                      <br />
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ut consequatur quas quidem ratione quos quibusdam
                      architecto eligendi minus quisquam aliquam, deleniti
                      voluptates molestiae praesentium ipsum dolor. Obcaecati,
                      asperiores saepe? Soluta?
                    </p>
                    <br />
                    <p>- Stephen Y</p>
                  </Card.Body>
                </Card>
              </Carousel.Item>
              <Carousel.Item>
                <Card
                  className="home-card-body text-center"
                  style={{ height: "20rem" }}
                >
                  <Card.Body
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      fontSize: "1.5rem",
                    }}
                  >
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      In, minus consequatur maxime dicta nulla inventore enim at
                      ducimus iusto eligendi sunt repudiandae aspernatur
                      suscipit velit, ratione officiis natus assumenda
                      cupiditate!
                      <br />
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ut consequatur quas quidem ratione quos quibusdam
                      architecto eligendi minus quisquam aliquam, deleniti
                      voluptates molestiae praesentium ipsum dolor. Obcaecati,
                      asperiores saepe? Soluta?
                    </p>
                    <br />
                    <p>- Jonah M.</p>
                  </Card.Body>
                </Card>
              </Carousel.Item>
              <Carousel.Item>
                <Card className="text-center" style={{ height: "20rem" }}>
                  <Card.Body
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      fontSize: "1.5rem",
                    }}
                  >
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      In, minus consequatur maxime dicta nulla inventore enim at
                      ducimus iusto eligendi sunt repudiandae aspernatur
                      suscipit velit, ratione officiis natus assumenda
                      cupiditate!
                      <br />
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ut consequatur quas quidem ratione quos quibusdam
                      architecto eligendi minus quisquam aliquam, deleniti
                      voluptates molestiae praesentium ipsum dolor. Obcaecati,
                      asperiores saepe? Soluta?
                    </p>
                    <br />
                    <p>- Jermey B.</p>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            </Carousel>
          </Row>
        </div>
      </Row>
      <Row className="d-block d-md-none">
        <div className="homepage-testimonials-mobile p-5">
          <h2>Testimonials</h2>
          <Carousel
            data-bs-theme="light"
            activeIndex={index}
            onSelect={handleSelect}
            style={{ borderRadius: "30px" }}
          >
            <Carousel.Item>
              <Card
                className="text-center"
                style={{
                  height: "20rem",
                }}
              >
                <Card.Body
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                  }}
                >
                  <p className="carousel-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                    minus consequatur maxime dicta nulla inventore enim at
                    ducimus iusto eligendi sunt repudiandae aspernatur suscipit
                    velit, ratione officiis natus assumenda cupiditate!
                  </p>
                  <br />
                  <p>- Stephen Y</p>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card
                className="home-card-body text-center"
                style={{ height: "20rem" }}
              >
                <Card.Body
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                  }}
                >
                  <p className="carousel-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                    minus consequatur maxime dicta nulla inventore enim at
                    ducimus iusto eligendi sunt repudiandae aspernatur suscipit
                    velit, ratione officiis natus assumenda cupiditate!
                  </p>
                  <br />
                  <p>- Jonah M.</p>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card className="text-center" style={{ height: "20rem" }}>
                <Card.Body
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                  }}
                >
                  <p className="carousel-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                    minus consequatur maxime dicta nulla inventore enim at
                    ducimus iusto eligendi sunt repudiandae aspernatur suscipit
                    velit, ratione officiis natus assumenda cupiditate!
                  </p>
                  <br />
                  <p>- Jeremy B.</p>
                </Card.Body>
              </Card>
            </Carousel.Item>
          </Carousel>
        </div>
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
          <Col style={{ backgroundColor: "lightgray" }} className="p-2 pb-3">
            <ContactForm />
          </Col>
        </div>
      </Row>
    </Container>
  );
}
