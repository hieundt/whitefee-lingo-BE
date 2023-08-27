//checked
import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';

const CommentSchema = new mongoose.Schema({
  id: {
    type: String,
    default: () => uuidv4,
  },
  content: {
    type: String,
  },
  reactions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CommentHasReaction',
  }],

});

const Comment = mongoose.model("Comment", CommentSchema);

export default Comment;