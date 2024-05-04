import { useState, useEffect } from "react";
import * as BlogApi from "../../utilities/blog-api";

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
    <>
      <h1>Blog Page</h1>
    </>
  );
}
