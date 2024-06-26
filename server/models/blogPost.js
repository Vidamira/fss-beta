const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogPostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;