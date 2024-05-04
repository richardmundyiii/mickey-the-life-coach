import sendRequest from "./send-request";
const BASE_URL = "/api/blogs";

export async function getAllPosts() {
  return sendRequest(`${BASE_URL}/`);
}

export async function createNews(blogFeed) {
  return sendRequest(`${BASE_URL}/`, "POST", blogFeed);
}

export async function updatePost(id, blogFeed) {
  return sendRequest(`${BASE_URL}/${id}`, "PUT", blogFeed);
}

export async function deletePost(id) {
  return sendRequest(`${BASE_URL}/${id}`, "DELETE");
}
