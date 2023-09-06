import mongoose from "mongoose";

const ToeicOptionSchema = new mongoose.Schema({
  content: {
    type: String,
    require: true,
  },
  correction: {
    type: Boolean,
    require: true,
  },
});

const ToeicOption = mongoose.model("ToeicOption", ToeicOptionSchema);

export default ToeicOption;