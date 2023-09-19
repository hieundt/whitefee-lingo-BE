import mongoose from "mongoose";

const TestHasQuestionSchema = new mongoose.Schema({
  questionType: {
    type: String,
    enum: [
      'toeic_speaking',
      'toeic_writing',
      'toeic_listening',
      'toeic_reading',
    ],
    require: true,
  },
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'questionType',
  },
})

const TestHasQuestion = mongoose.model('TestHasQuestion', TestHasQuestionSchema);

export default TestHasQuestion;