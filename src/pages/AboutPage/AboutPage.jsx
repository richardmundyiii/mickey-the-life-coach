import { Container, Row, Col } from "react-bootstrap";
import ProfileImage from "../../images/AboutPhoto.jpg";
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
            style={{ float: "right", height: "40rem" }}
          />
          <p style={{ textAlign: "justify", fontSize: "1.5rem" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
            autem cum dolorum repellendus saepe. Quos numquam distinctio fugiat
            quas, fugit rem ratione tenetur? Eaque ex quibusdam aperiam mollitia
            voluptatem maiores. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Porro eos ipsam aut quos consequuntur laudantium
            quia optio deleniti veniam alias nulla explicabo, ab consequatur
            natus magni maxime officiis! Ut, sed! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Suscipit consequuntur maxime corporis
            accusamus nesciunt quae debitis. Beatae consequuntur labore nobis
            blanditiis, quam, accusantium porro quo quibusdam, laboriosam
            adipisci officia eligendi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Maiores ipsam animi reprehenderit similique ipsum
            a maxime iure. Temporibus, porro animi eaque accusamus, vel tenetur
            eius, quasi dolores ratione non adipisci. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Temporibus magni placeat tenetur
            laudantium voluptate suscipit! Eius delectus omnis, totam commodi
            velit neque fugit numquam rerum? In sint consequatur vitae
            similique! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
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
      <Row className="d-block d-md-none about-mobile">
        <Col>
          <h1>About Mickey</h1>
          <hr />
        </Col>
        <Col>
          <img src={ProfileImage} alt="..." className="profile-image" />
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
