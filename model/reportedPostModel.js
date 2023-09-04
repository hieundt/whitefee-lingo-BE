//checked
import mongoose from "mongoose";

const ReportedPostSchema = new mongoose.Schema({
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    require: true,
  },
  reporterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true,
  },
  description: {
    type: String,
  },
});

const ReportedPost = mongoose.model("ReportedPost", ReportedPostSchema);

export default ReportedPost;