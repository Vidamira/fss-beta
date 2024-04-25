const express = require('express');
const router = express.Router();
const { createBlogPost, getBlogPosts } = require('../controllers/blogController'); 
const cors = require('cors');

//cors
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)

router.get('/', getBlogPosts);
router.post('/', createBlogPost);

module.exports = router;