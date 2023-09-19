//checked
import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
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