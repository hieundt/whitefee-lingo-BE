import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid"

const TestSchema = new mongoose.Schema({
  id: {
    type: String,
    default: () => uuidv4,
  },
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  promt: {
    type: String,
  },
  questions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Question',
    },
  ],
  totalPoint: {
    type: Number,
    default: 0,
  },
});

const Test = mongoose.model("Test", TestSchema);

export default Test;