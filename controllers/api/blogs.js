const Blogs = require("../../models/api/blog");

module.exports = {
  index,
  create,
  updatePost,
  deletePost,
};

async function index(req, res) {
  try {
    const blogs = await Blogs.find({});
    console.log(blogs, "working from controller");
    res.json(blogs);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function create(req, res) {
  try {
    const blogPost = await Blogs.create(req.body);
    res.json(blogPost);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function updatePost(req, res) {
  try {
    const updatePost = await Blogs.findOneAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatePost);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function deletePost(req, res) {
  try {
    const blogPost = await Blogs.findOneAndDelete({ _id: req.params.id });
    res.json(blogPost);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}
