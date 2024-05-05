import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import * as BlogApi from "../../utilities/blog-api";
import { TableBody, TableCell, TableRow } from "@aws-amplify/ui-react";
import "./AdminAllPosts.css";

export default function AdminAllPosts() {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    async function getAllPosts() {
      const posts = await BlogApi.getAllPosts();
      setAllPosts(posts);
    }

    getAllPosts();
  }, []);

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
                <TableRow>
                  <TableCell>{post.date}</TableCell>
                  <TableCell>{post.title}</TableCell>
                  <TableCell>
                    <Button className="btn btn-warning">Edit</Button>
                  </TableCell>
                  <TableCell>
                    <Button className="btn btn-danger">Delete</Button>
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
