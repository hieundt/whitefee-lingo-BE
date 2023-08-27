//checked
import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';

const CommentReactionSchema = new mongoose.Schema({
  id: {
    type: String,
    default: () => uuidv4,
  },
  reaction: {
    type: String,
    enum: ['NONE', 'LOVE', 'HAHA', 'SAD', 'ANGRY'],
    default: 'NONE',
  },

});

const CommentReaction = mongoose.model("CommentReaction", CommentReactionSchema);

export default CommentReaction;