import mongoose from "mongoose";

const ToeicListeningSchema = new mongoose.Schema({
  direction: {
    type: String,
  },
  audio: {
    type: String,
    require: true,
  },
  contextImage: {
    type: String,
  },
  toeicQuestionBlocks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ToeicQuestonBlock',

  }],
})
const ToeicListening = mongoose.model("ToeicListening", ToeicListeningSchema);
export default ToeicListening












