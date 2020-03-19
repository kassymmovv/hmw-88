const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author:{
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  datetime:{
    type: Date,
    default:Date.now(),
  },
  description: String,
  image: String,
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;