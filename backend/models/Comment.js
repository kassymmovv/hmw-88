const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const CommentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author:{
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  post:{
    type: Schema.Types.ObjectId,
    ref: 'Post',
    required: true
  },
  description: {
    type:String,
    required:true
  },
  datetime:{
    type: Date,
    default:Date.now(),
  }
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;