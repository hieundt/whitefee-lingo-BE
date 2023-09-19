import mongoose from "mongoose";

const ToeicWritingSchema = new mongoose.Schema({
  direction: {
    type: String,
  },
  contexts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ToeicContext',

  }],
  writingResponses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ToeicWritingResponse',

  }],
  releaseDate: {
    type: Date,
    require: true,
  },
})
const ToeicWriting = mongoose.model("ToeicWriting", ToeicWritingSchema);
export default ToeicWriting 