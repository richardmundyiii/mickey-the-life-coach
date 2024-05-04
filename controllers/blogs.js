const Blog = require("../models/blog");

module.exports = {
  index,
  create,
  updatePost,
  deletePost,
};

async function index(req, res) {
  try {
    const blogs = await Blog.find({});
    res.json(blogs);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function create(req, res) {
  try {
    const blogPost = await Blog.create(req.body);
    res.json(blogPost);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function updatePost() {
  try {
    const updatePost = await Blog.findOneAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatePost);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function deletePost() {
  try {
    const blogPost = await Blog.findOneAndDelete({ _id: req.params.id });
    res.json(blogPost);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}
