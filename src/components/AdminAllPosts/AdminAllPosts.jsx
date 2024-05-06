import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import * as BlogApi from "../../utilities/blog-api";
import { TableBody, TableCell, TableRow } from "@aws-amplify/ui-react";
import ViewPostComponent from "../../components/ViewPostComponent/ViewPostComponent";
import "./AdminAllPosts.css";

export default function AdminAllPosts() {
  const [allPosts, setAllPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [viewingPost, setViewingPost] = useState(false);

  async function getAllPosts() {
    const posts = await BlogApi.getAllPosts();
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    setAllPosts(posts);
  }

  function refactorDateFormat(dateStr) {
    const date = new Date(dateStr);
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    const yy = String(date.getFullYear()).slice(2);
    return `${mm}-${dd}-${yy}`;
  }

  useEffect(() => {
    getAllPosts();
  }, []);

  function handleViewPost(post) {
    setSelectedPost(post);
    setViewingPost(true);
  }

  function handleClosePost() {
    setSelectedPost(null);
    setViewingPost(false);
    getAllPosts();
  }

  async function handleDeletePost(id) {
    await BlogApi.deletePost(id);

    getAllPosts();
  }

  return (
    <Container>
      {viewingPost ? (
        <Row>
          <Col>
            <ViewPostComponent post={selectedPost} onClose={handleClosePost} />
          </Col>
        </Row>
      ) : (
        <Row className="mt-5">
          <Col>
            <h1 style={{ textAlign: "right" }}>All Posts</h1>
            <Table className="mt-4">
              <TableBody>
                {allPosts.map((post, idx) => (
                  <TableRow key={post._id}>
                    <TableCell>{post.date}</TableCell>
                    <TableCell>{post.title}</TableCell>
                    <TableCell>
                      <Button
                        onClick={() => handleViewPost(post)}
                        className="btn btn-info"
                      >
                        View
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        onClick={() => handleDeletePost(post._id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Col>
        </Row>
      )}
    </Container>
  );
}
