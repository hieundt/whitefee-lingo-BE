//checked
import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid"

const AdminSchema = new mongoose.Schema({
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
  mods: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  admins: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
});

const Admin = mongoose.model("Admin", AdminSchema);

export default Admin;