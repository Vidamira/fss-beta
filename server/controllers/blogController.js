const BlogPost = require('../models/blogPost');

// POST blog posts
const createBlogPost = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      throw new Error('Title and content required');
    }

    const newBlogPost = new BlogPost({ title, content });
    const savedPost = await newBlogPost.save();
    console.log('Blog post created successfully:', savedPost);

    res.json(savedPost);
  } catch (error) {
    console.error('Error creating blog post:', error);
    res.json({ error: error.message || 'Error occurred while creating blog pst.' });
  }
};

// GET all blog posts
const getBlogPosts = async (req, res) => {
  try {
    const blogPosts = await BlogPost.find();
    console.log('Fetched blog posts:', blogPosts);
    res.json(blogPosts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    res.json({ error: 'Error occurred while fetching blog posts.' });
  }
};


module.exports = {
  createBlogPost,
  getBlogPosts,
};
