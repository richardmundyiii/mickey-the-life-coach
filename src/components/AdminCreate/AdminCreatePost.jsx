import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Row,
} from "react-bootstrap";
import QuillComponent from "../../components/QuillComponent/QuillComponent";
import * as BlogApi from "../../utilities/blog-api";

export default function AdminCreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSavePost = async (evt) => {
    evt.preventDefault();
    try {
      const currentDate = new Date(); // Get the current date
      const response = await BlogApi.createNews({
        date: currentDate,
        title: title,
        post: content,
      });
      // Make a POST request to save the post to MongoDB
      //   const response = await axios.post("/api/posts", {
      //     title: title,
      //     post: content, // Corrected to use 'post' instead of 'content' to match the schema
      //     date: currentDate, // Include the current date
      //   });
      console.log(response.data); // Assuming your API returns some confirmation
      // Reset title and content after successful save
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error saving post:", error);
    }
  };

  return (
    <Container
      style={{
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Row>
        <Col>
          <h3>Create Post</h3>
        </Col>
      </Row>
      <Row>
        <Form onSubmit={handleSavePost}>
          <Form.Group className="m-3">
            <FormControl
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <div>
            <QuillComponent onChange={(content) => setContent(content)} />
          </div>
          <Button
            className="btn btn-primary mt-3"
            style={{ width: "100%" }}
            type="submit"
          >
            Save
          </Button>
        </Form>
      </Row>
    </Container>
  );
}

// import { useState } from "react";
// import {
//   Button,
//   Col,
//   Container,
//   Form,
//   FormControl,
//   Row,
// } from "react-bootstrap";
// import QuillComponent from "../../components/QuillComponent/QuillComponent";
// import * as BlogApi from "../../utilities/blog-api";

// export default function AdminCreatePost() {
//   const [title, setTitle] = useState("");
//   const [post, setPost] = useState("");

//   async function handleSavePost(evt) {
//     evt.preventDefault();

//     try {
//       const post = await BlogApi.createNews({
//         title: title,
//         post: post,
//       });

//       console.log(post);

//       setTitle("");
//       setPost("");
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   return (
//     <Container
//       style={{
//         height: "90vh",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Row>
//         <Col>
//           <h3>Create Post</h3>
//         </Col>
//       </Row>
//       <Row>
//         <Form onSubmit={handleSavePost}>
//           <Form.Group className="m-3">
//             <FormControl
//               type="text"
//               placeholder="Enter title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//             />
//           </Form.Group>
//           <div>
//             <QuillComponent onChange={(post) => setPost(post)} />
//           </div>
//           <Button
//             className="btn btn-primary mt-3"
//             style={{ width: "100%" }}
//             type="submit"
//           >
//             Save
//           </Button>
//         </Form>
//       </Row>
//     </Container>
//   );
// }
