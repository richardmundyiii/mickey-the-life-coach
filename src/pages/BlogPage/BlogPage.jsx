import { useState, useEffect } from "react";
import * as BlogApi from "../../utilities/blog-api";
import { Button, Card, CardBody, Container, Row } from "react-bootstrap";
import "./BlogPage.css";

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    async function getBlogPosts() {
      try {
        const posts = await BlogApi.getAllPosts();
        setBlogPosts(posts);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    }

    getBlogPosts();
  }, []);

  console.log(blogPosts, "working");
  return (
    <Container className="blog-container">
      <Row>
        {blogPosts.map((post, idx) => (
          <Card
            className={idx % 2 === 0 ? "blog-card-left" : "blog-card-right"}
          >
            <CardBody>
              <h3>{post.title}</h3>
              <p>{post.post}</p>
            </CardBody>
            <Button className="blog-more-button">Read More</Button>
          </Card>
        ))}
      </Row>
    </Container>
  );
}
