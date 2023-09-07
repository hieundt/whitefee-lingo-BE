import mongoose from "mongoose";

const ToeicTestSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  image: {
    type: String,
  },
  promt: {
    type: String,
  },
  // listeningScore: {
  //   type: Number,
  //   default: 0,
  // },
  // readingScore: {
  //   type: Number,
  //   default: 0,
  // },
  questions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ToeicQuestion',
    },
  ],
})

const ToeicTest = mongoose.model('ToeicTest', ToeicTestSchema);

export default ToeicTest;