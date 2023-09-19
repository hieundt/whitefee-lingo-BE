//checked
import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  description: {
    type: String,
  },
  point: {
    type: Number,
    default: 0,
  },
  postType: {
    type: String,
    enum: ['vocabulary', 'test', 'normal'],
    default: 'normal',
  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment',
  }],
  votings: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Voting',
  }],
});

const Post = mongoose.model("Post", PostSchema);

export default Post;