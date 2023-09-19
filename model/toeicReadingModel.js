import mongoose from "mongoose";

const ToeicReadingSchema = new mongoose.Schema({
  direction: {
    type: String,
  },
  passage: {
    type: String,
    require: true,
  },
  information: {
    type: String,
    enum: [
      'chart',
      'table',
      'image',
      'none',
    ],
    default: 'none',
  },
  toeicQuestionBlocks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ToeicQuestonBlock',

  }],
})
const ToeicReading = mongoose.model("ToeicReading", ToeicReadingSchema);
export default ToeicReading

