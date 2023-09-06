import mongoose from "mongoose";

const ToeicQuestionBlockSchema = new mongoose.Schema({
  question: {
    type: String,
    require: true,
  },
  correctAnswer: {
    type: Boolean,
    require: true,
  },
  explaination: {
    type: String,
    require: true,
  },
  score: {
    type: Number,
    default: 0,
  },
  option: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ToeicOption',
  }],
});

const ToeicQuestionBlock = mongoose.model("ToeicQuestonBlock", ToeicQuestionBlockSchema);

export default ToeicQuestionBlock;