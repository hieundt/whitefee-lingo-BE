import mongoose from "mongoose";

const ToeicSpeakingResponseSchema = new mongoose.Schema({
  question: {
    type: String,
  },
  source: {
    type: String,
    require: true,
  },
  score: {
    type: Number,
  },
})

const ToeicSpeakingResponse = mongoose.model("ToeicSpeakingResponse", ToeicSpeakingResponseSchema)

export default ToeicSpeakingResponse 