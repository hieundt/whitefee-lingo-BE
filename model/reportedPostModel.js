//checked
import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid"

const ReportedPostSchema = new mongoose.Schema({
  id: {
    type: String,
    default: () => uuidv4,
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
  },
  reporterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  description: {
    type: String,
  },
});

const ReportedPost = mongoose.model("ReportedPost", ReportedPostSchema);

export default ReportedPost;