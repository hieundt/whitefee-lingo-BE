import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid"

const TestHistorySchema = new mongoose.Schema({
  id: {
    type: String,
    default: () => uuidv4,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  testId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Test',
  },
  totalPoint: {
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