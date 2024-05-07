import { useState, useEffect } from "react";
import * as BlogApi from "../../utilities/blog-api";
import { Button, Card, CardBody, Container, Row } from "react-bootstrap";
import BlogViewPost from "../../components/BlogViewPost/BlogViewPost";
import "./BlogPage.css";

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [isViewingPost, setIsViewingPost] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    async function getBlogPosts() {
      try {
        const posts = await BlogApi.getAllPosts();
        posts.sort((a, b) => new Date(b.date) - new Date(a.date));
        setBlogPosts(posts);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    }

    getBlogPosts();
  }, []);

  function handleViewPost(post) {
    setSelectedPost(post);
    setIsViewingPost(true);
  }

  function handleClosePost() {
    setIsViewingPost(false);
  }

  return (
    <Container className="blog-container">
      {isViewingPost ? (
        <Row>
          <BlogViewPost post={selectedPost} onClose={handleClosePost} />
        </Row>
      ) : (
        <Row>
          {blogPosts.map((post, idx) => (
            <Card
              className={
                idx % 2 === 0 ? "blog-card-left m-3" : "blog-card-right m-3"
              }
            >
              <CardBody>
                <h3>{post.title}</h3>
                <p>{post.post}</p>
              </CardBody>
              <div className="d-none d-md-block">
                <Button
                  className="btn btn-outlined blog-more-button"
                  onClick={() => handleViewPost(post)}
                >
                  Read More
                </Button>
              </div>
              <div className="d-block d-md-none">
                <Button
                  variant="outline-primary"
                  className="m-2"
                  onClick={() => handleViewPost(post)}
                >
                  Read More
                </Button>
              </div>
            </Card>
          ))}
        </Row>
      )}
    </Container>
  );
}
