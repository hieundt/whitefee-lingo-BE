import mongoose from "mongoose";

const ToeicContextSchema = new mongoose.Schema({
  testType: {
    type: String,
    enum: ['chart', 'table', 'image', 'text', 'none',],
    default: 'none',
  },
})

const ToeicContext = mongoose.model('ToeicContext', ToeicContextSchema);

export default ToeicContext;