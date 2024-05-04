/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
      id
      date
      title
      imageUrl
      post
      __typename
    }
  }
`;
export const listBlogs = /* GraphQL */ `
  query ListBlogs {
    listBlogs {
      id
      date
      title
      imageUrl
      post
      __typename
    }
  }
`;
