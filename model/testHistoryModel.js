import mongoose from "mongoose";

const TestHistorySchema = new mongoose.Schema({
  testId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Test',
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

const TestHistory = mongoose.model("TestHistory", TestHistorySchema);

export default TestHistory;