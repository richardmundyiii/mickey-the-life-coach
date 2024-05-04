import { useState, useEffect } from "react";

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    async function getBlogPosts() {
      const posts = await Blog;
    }
  }, []);
  return (
    <>
      <h1>Blog Page</h1>
    </>
  );
}
