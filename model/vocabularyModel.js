import mongoose from "mongoose";

const VocabularySchema = new mongoose.Schema({
  word: {
    type: String,
    require: true,
  },
  partOfSpeech: {
    type: String,
    require: true,
  },
  definition: {
    type: String,
    require: true,
  },
  audio: {
    type: String,
  },
  pronunciation: {
    type: String,
    require: true,
  },
  contextImage: {
    type: String,
  },
  example: {
    type: String,
    require: true,
  },
});

const Vocabulary = mongoose.model("Vocabulary", VocabularySchema);

export default Vocabulary;