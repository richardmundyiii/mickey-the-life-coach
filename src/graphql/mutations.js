/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $date: String!
    $title: String!
    $imageUrl: String
    $post: String!
  ) {
    createBlog(date: $date, title: $title, imageUrl: $imageUrl, post: $post) {
      id
      date
      title
      imageUrl
      post
      __typename
    }
  }
`;
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $id: ID!
    $date: String
    $title: String
    $imageUrl: String
    $post: String
  ) {
    updateBlog(
      id: $id
      date: $date
      title: $title
      imageUrl: $imageUrl
      post: $post
    ) {
      id
      date
      title
      imageUrl
      post
      __typename
    }
  }
`;
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog($id: ID!) {
    deleteBlog(id: $id) {
      id
      date
      title
      imageUrl
      post
      __typename
    }
  }
`;
