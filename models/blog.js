const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  post: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Blog", blogSchema);
