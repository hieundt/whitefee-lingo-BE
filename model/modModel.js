//checked
import mongoose from "mongoose";

const ModSchema = new mongoose.Schema({
  pendingPosts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
  }],
  reportedUsers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ReportedUser',
  }],
  reportedPosts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ReportedPost',
  }],
});

const Mod = mongoose.model("Mod", ModSchema);

export default Mod;