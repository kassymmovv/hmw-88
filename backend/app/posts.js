const path = require('path');

const express = require('express');
const multer = require('multer');
const nanoid = require('nanoid');

const config = require('../config');

const Post = require('../models/Post');
const User = require('../models/User');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, config.uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, nanoid() + path.extname(file.originalname));
  }
});

const upload = multer({storage});

const router = express.Router();

router.get('/', async (req, res) => {
  const items = await Post.find().populate('author');
  res.send(items);
});

router.get('/:id', async (req, res) => {
  try {
    const item = await Post.findById(req.params.id).populate('author');

    if (!item) {
      return res.status(404).send({message: 'Not found'});
    }

    res.send(item);
  } catch (e) {
    res.status(404).send({message: 'Not found'});
  }
});

router.post('/', upload.single('image'), async (req, res) => {
  const productData = req.body;
  if (req.file) {
    productData.image = req.file.filename;
  }
  if (req.body.description === "null"){

  }


  try {
    const token = req.get('Authorization').split(' ')[1];
    const user = await User.findOne({token});
    productData.author = user._id;
    const post = new Post(productData);
    await post.save();

    return res.send({id: post._id});
  } catch (e) {
    return res.status(400).send(e);
  }
});

module.exports = router;