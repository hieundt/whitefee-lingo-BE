//checked
import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';

const PostSchema = new mongoose.Schema({
  id: {
    type: String,
    default: () => uuidv4,
  },
  description: {
    type: String,
  },
  point: {
    type: Number,
    default: 0,
  },
  postType: {
    type: String,
    enum: ['VOCABULARY', 'TEST'],
    default: 'VOCABULARY',
  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment',
  }],
  votings: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PostHasVoting',
  }],
  reports: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ReportedPost',
  }],

});

const Post = mongoose.model("Post", PostSchema);

export default Post;