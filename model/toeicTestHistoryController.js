import mongoose from "mongoose";

const ToeicTestHistorySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  testId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ToeicTest',
  },
  totalScore: {
    type: Number,
    default: 0,
  },
  testDate: {
    type: Date,
    default: Date.now,
  },
});

const ToeicTestHistory = mongoose.model("TestHistory", ToeicTestHistorySchema);

export default ToeicTestHistory;