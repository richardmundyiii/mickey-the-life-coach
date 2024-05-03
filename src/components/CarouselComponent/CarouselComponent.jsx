import { useState } from "react";
import { Carousel, Card, Container } from "react-bootstrap";
import "./CarouselComponent.css";

export default function CarouselComponent() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container className="carousel-container">
      <Carousel
        data-bs-theme="light"
        activeIndex={index}
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <Card>
            <Card.Body>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                minus consequatur maxime dicta nulla inventore enim at ducimus
                iusto eligendi sunt repudiandae aspernatur suscipit velit,
                ratione officiis natus assumenda cupiditate!
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                consequatur quas quidem ratione quos quibusdam architecto
                eligendi minus quisquam aliquam, deleniti voluptates molestiae
                praesentium ipsum dolor. Obcaecati, asperiores saepe? Soluta?
              </p>
              <br />
              <p>- Stephen Y</p>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card>
            <Card.Body>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                minus consequatur maxime dicta nulla inventore enim at ducimus
                iusto eligendi sunt repudiandae aspernatur suscipit velit,
                ratione officiis natus assumenda cupiditate!
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                consequatur quas quidem ratione quos quibusdam architecto
                eligendi minus quisquam aliquam, deleniti voluptates molestiae
                praesentium ipsum dolor. Obcaecati, asperiores saepe? Soluta?
              </p>
              <br />
              <p>- Jonah M.</p>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card>
            <Card.Body>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                minus consequatur maxime dicta nulla inventore enim at ducimus
                iusto eligendi sunt repudiandae aspernatur suscipit velit,
                ratione officiis natus assumenda cupiditate!
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                consequatur quas quidem ratione quos quibusdam architecto
                eligendi minus quisquam aliquam, deleniti voluptates molestiae
                praesentium ipsum dolor. Obcaecati, asperiores saepe? Soluta?
              </p>
              <br />
              <p>- Jermey B.</p>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}
