import mongoose from "mongoose";

const ToeicQuestionBlockSchema = new mongoose.Schema({
  question: {
    type: String,
    require: true,
  },
  explaination: {
    type: String,
  },
  score: {
    type: Number,
    default: 0,
  },
  options: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ToeicOption',

  }],
});

const ToeicQuestionBlock = mongoose.model("ToeicQuestonBlock", ToeicQuestionBlockSchema);

export default ToeicQuestionBlock;