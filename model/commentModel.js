//checked
import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  content: {
    type: String,
  },
  reactions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CommentReaction',
  }],

});

const Comment = mongoose.model("Comment", CommentSchema);

export default Comment;