import mongoose from "mongoose";

const TestSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  image: {
    type: String,
  },
  testType: {
    type: String,
    enum: ['toeic', 'ielts',],
    require: true,
  },
  questions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TestHasQuestion',
  }],
})

const Test = mongoose.model('Test', TestSchema);

export default Test;