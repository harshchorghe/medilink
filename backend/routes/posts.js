const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Get all posts
router.get('/', async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

// Add a post
router.post('/', async (req, res) => {
  const { title, content } = req.body;
  const newPost = new Post({ title, content });
  await newPost.save();
  res.json(newPost);
});

module.exports = router;
