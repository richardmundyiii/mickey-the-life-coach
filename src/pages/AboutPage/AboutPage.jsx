import { Container, Row, Col } from "react-bootstrap";
import ProfileImage from "../../images/cherryblossom.jpg";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <Container style={{ textAlign: "center" }}>
      <Row className="mt-5 d-none d-md-block">
        <Row>
          <Col>
            <h1>About Mickey Blanchette</h1>
            <hr />
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
        <Col>
          <img
            src={ProfileImage}
            alt="..."
            style={{ float: "right", height: "30rem", borderRadius: "2rem" }}
            className="p-4"
          />
          <p style={{ textAlign: "justify", fontSize: "1.5rem" }}>
            In the midst of a sixteen-year relationship, I came to a profound
            realization: somewhere along the journey of "us," I had lost sight
            of myself. It was a moment of awakening, recognizing the quiet
            erosion of my own happiness beneath the weight of expectations and
            compromises. At 230lbs, both physically and emotionally, I felt the
            pressing need for change.
            <br />
            <br />
            Thus began my transformative journey into the realm of
            self-development. It was a path paved with introspection,
            resilience, and a relentless pursuit of authenticity. Through the
            crucible of my own experiences, I discovered not just the desire for
            change, but the unwavering resolve to turn my pain into purpose.
            <br />
            <br />
            <hr />
            Today, I stand not only as a testament to the power of personal
            evolution but also as a guide for those who seek their own path to
            fulfillment. My mission is clear: to empower individuals to unearth
            their true purpose and to embrace the journey towards their goals
            with clarity and confidence.
            <br />
            <br />
            Drawing upon a foundation of science-based research and my own lived
            experiences, I offer a bespoke approach to personal growth and
            achievement. Each individual's journey is unique, and I am committed
            to tailoring strategies that resonate with your specific aspirations
            and challenges.
            <br />
            <br />
            I firmly believe that true success emanates from within. It is not
            merely the culmination of external achievements but a reflection of
            our inner alignment with purpose and passion. Through coaching,
            guidance, and unwavering support, I endeavor to facilitate this
            profound inner transformation.
            <br />
            <br />
            If you're ready to embark on a journey of self-discovery and
            empowerment, I invite you to take the first step. Contact me today
            for a complimentary consultation, and let's begin the transformative
            process of unlocking your fullest potential.
          </p>
        </Col>
      </Row>
      <Row className="d-block d-md-none about-mobile">
        <Col>
          <h1>About Mickey</h1>
          <hr />
        </Col>
        <Col className="pb-4">
          <img
            src={ProfileImage}
            alt="..."
            className="profile-image"
            style={{
              width: "100%",
              borderRadius: "2rem",
            }}
          />
        </Col>
        <Col>
          <p style={{ textAlign: "justify", fontSize: "1rem" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
            autem cum dolorum repellendus saepe. Quos numquam distinctio fugiat
            quas, fugit rem ratione tenetur? Eaque ex quibusdam aperiam mollitia
            voluptatem maiores. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Porro eos ipsam aut quos consequuntur laudantium
            quia optio deleniti veniam alias nulla explicabo, ab consequatur
            natus magni maxime officiis!
            <br />
            <hr />
            Ut, sed! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Suscipit consequuntur maxime corporis accusamus nesciunt quae
            debitis. Beatae consequuntur labore nobis blanditiis, quam,
            accusantium porro quo quibusdam, laboriosam adipisci officia
            eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Maiores ipsam animi reprehenderit similique ipsum a maxime iure.
            Temporibus, porro animi eaque accusamus, vel tenetur eius, quasi
            dolores ratione non adipisci. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Temporibus magni placeat tenetur laudantium
            voluptate suscipit! Eius delectus omnis, totam commodi velit neque
            fugit numquam rerum? In sint consequatur vitae similique! Lorem
            ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            <hr />
            Nisi eos molestias alias eius nihil in enim ipsam sequi atque veniam
            velit harum amet, repellat, quae excepturi? Accusamus numquam
            laudantium id. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Atque, dicta ipsam, illo autem aperiam temporibus quis id iure
            iste molestias corporis repudiandae qui officiis voluptas amet
            fugiat aliquid impedit nemo. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Corporis officia iure, facilis delectus, rem dicta
            laboriosam cumque, praesentium similique obcaecati perspiciatis ipsa
            ratione soluta voluptatem placeat veniam numquam hic. Aut?
          </p>
        </Col>
      </Row>
    </Container>
  );
}
