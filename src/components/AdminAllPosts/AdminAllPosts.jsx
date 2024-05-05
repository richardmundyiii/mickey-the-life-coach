import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import * as BlogApi from "../../utilities/blog-api";
import { TableBody, TableCell, TableRow } from "@aws-amplify/ui-react";
import "./AdminAllPosts.css";

export default function AdminAllPosts() {
  const [allPosts, setAllPosts] = useState([]);

  const getAllPosts = async () => {
    const posts = await BlogApi.getAllPosts();
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    setAllPosts(posts);
  };

  const refactorDateFormat = (dateStr) => {
    const date = new Date(dateStr);
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    const yy = String(date.getFullYear()).slice(2);
    return `${mm}-${dd}-${yy}`;
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  const handleDeletePost = async (id) => {
    await BlogApi.deletePost(id);

    getAllPosts();
  };

  return (
    <Container>
      <Row>
        <h1 style={{ textAlign: "right" }}>All Posts</h1>
      </Row>
      <Row>
        <Col>
          <Table>
            <TableBody>
              {allPosts.map((post, idx) => (
                <TableRow key={idx}>
                  <TableCell>{refactorDateFormat(post.date)}</TableCell>
                  <TableCell>{post.title}</TableCell>
                  <TableCell>
                    <Button className="btn btn-warning">View</Button>
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
    </Container>
  );
}
