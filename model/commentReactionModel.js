//checked
import mongoose from "mongoose";

const CommentReactionSchema = new mongoose.Schema({
  reaction: {
    type: String,
    enum: ['NONE', 'LOVE', 'HAHA', 'SAD', 'ANGRY'],
    default: 'NONE',
    uppercase: true,
  },
});

const CommentReaction = mongoose.model("CommentReaction", CommentReactionSchema);

export default CommentReaction;