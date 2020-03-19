const express = require('express');

const Comment = require('../models/Comment');

const router = express.Router();

router.get('/', async (req, res) => {
  const comment = await Comment.find({post:req.params.id});

  return res.send(comment);
});

router.post('/', async (req, res) => {
  const comment = new Comment(req.body);

  await comment.save();

  return res.send(comment);
});

module.exports = router;