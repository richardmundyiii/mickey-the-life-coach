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
                "Working with my Mickey has been a transformative experience.
                Not only have I achieved my fitness goals and adopted a
                healthier lifestyle, but I've also gained confidence in
                navigating the dating scene. His personalized approach to
                exercise, dieting, and dating advice has truly empowered me to
                become the best version of myself. I highly recommend Mickey's
                services to anyone looking to make positive changes in their
                life!"
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
                "I can't thank my life coach, Mickey, enough for the incredible
                support and guidance he's provided me on my journey to better
                health and relationships. With his expert coaching, I've not
                only seen significant improvements in my physical fitness and
                dietary habits but also gained valuable insights into building
                meaningful connections in my personal life. Mickey's holistic
                approach to wellness and dating has been nothing short of
                life-changing!"
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
                "Working with Mickey has been a game-changer in my dating life.
                His insightful guidance and personalized approach have helped me
                navigate the complexities of modern romance with confidence and
                ease. From revamping my online dating profile to honing my
                communication skills, Mickey's support has been invaluable every
                step of the way. Thanks to your expertise, I've not only met
                amazing people but also forged deeper, more meaningful
                connections. If you're looking to level up your dating game, I
                highly recommend partnering with a life coach like Mickey!"
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
