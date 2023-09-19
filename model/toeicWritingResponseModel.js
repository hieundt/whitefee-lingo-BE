import mongoose from "mongoose";

const ToeicWritingResponseSchema = new mongoose.Schema({
  direction: {
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

const ToeicWritingResponse = mongoose.model("ToeicWritingResponse", ToeicWritingResponseSchema)
export default ToeicWritingResponse
