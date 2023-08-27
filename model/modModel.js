//checked
import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid"

const ModSchema = new mongoose.Schema({
  id: {
    type: String,
    default: () => uuidv4,
  },
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