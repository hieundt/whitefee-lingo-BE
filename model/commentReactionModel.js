//checked
import mongoose from "mongoose";

const CommentReactionSchema = new mongoose.Schema({
  reaction: {
    type: String,
    enum: ['none', 'love', 'haha', 'sad', 'angry'],
    default: 'none',
  },
});

const CommentReaction = mongoose.model("CommentReaction", CommentReactionSchema);

export default CommentReaction;