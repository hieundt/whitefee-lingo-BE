import mongoose from "mongoose";

const ToeicSpeakingSchema = new mongoose.Schema({
  direction: {
    type: String,
  },
  contexts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ToeicContext',

  }],
  speakingResponses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ToeicSpeakingResponse',

  }],
  releaseDate: {
    type: Date,
    require: true,
  },
})
const ToeicSpeaking = mongoose.model("ToeicSpeaking", ToeicSpeakingSchema);
export default ToeicSpeaking 