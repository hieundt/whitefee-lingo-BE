//checked
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ['USER', 'ADIN', 'MOD'],
    default: 'USER',
  },
  point: {
    type: Number,
    default: 0,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  userName: {
    type: String,
  },
  avatar: {
    type: String,
  },
  bio: {
    type: String,
  },
  birthDay: {
    type: Date,
    default: Date.now,
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
  }],
  followers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  following: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  favoritesVocabulary: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vocabulary',
  }],
  favoritesUnit: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Unit',
  }],
  testHistory: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TestHistory',
  }],
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment',
  }],
  commentReactions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CommentReaction',
  }],
  votings: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Voting',
  }],
  reports: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ReportedUser',
  }],

});

const User = mongoose.model("User", UserSchema);

export default User;