const express = require('express');

const Comment = require('../models/Comment');
const User = require('../models/User');

const router = express.Router();

router.post('/', async (req, res) => {
  const productData = req.body;

  const token = req.get('Authorization').split(' ')[1];
  const user = await User.findOne({token});
  productData.author = user._id;
  const post = new Comment(productData);

  try {
    await post.save();

    return res.send({id: post._id});
  } catch (e) {
    return res.status(400).send(e);
  }
});

router.get('/:id', async (req, res) => {
  const comment = await Comment.find({post:req.params.id}).populate('post');

  return res.send(comment);
});



module.exports = router;