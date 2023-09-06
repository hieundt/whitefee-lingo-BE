import mongoose from "mongoose";

const ToeicQuestionSchema = new mongoose.Schema({
  questionBlocks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ToeicQuestonBlock',
  }]
}, {
  discriminatorKey: 'type',
})

const ToeicListeningSchema = new mongoose.Schema({
  audio: {
    type: String,
    require: true,
  },
  contextImage: {
    type: String,
  },
}, {
  discriminatorKey: 'type', // Set the type to 'Listening'
  _id: false, // Disable _id for subdocuments
});

// Define the schema for 'ToeicReading' questions (extends ToeicQuestion)
const ToeicReadingSchema = new mongoose.Schema({
  passage: {
    type: String,
    require: true,
  },
  information: [{
    type: String,
    enum: ['CHART', 'TABLE', 'IMAGE', 'NONE'],
    default: 'NONE',
  }],
}, {
  discriminatorKey: 'type', // Set the type to 'Reading'
  _id: false, // Disable _id for subdocuments
});

const ToeicTestSchema = new mongoose.Schema({
  title: String,
  description: String,
  promt: String,
  image: String,
  listeningScore: Number,
  readingScore: Number,
  questions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ToeicQuestion',
  }],
});


const ToeicQuestion = mongoose.model('ToeicQuestion', ToeicQuestionSchema);
const ToeicListening = ToeicQuestion.discriminator('ToeicListening', ToeicListeningSchema);
const ToeicReading = ToeicQuestion.discriminator('ToeicReading', ToeicReadingSchema);
const ToeicTest = mongoose.model('ToeicTest', ToeicTestSchema);

export default { ToeicQuestion, ToeicListening, ToeicReading, ToeicTest };
