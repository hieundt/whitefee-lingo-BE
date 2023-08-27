import mongoose from "mongoose";

const UnitSchema = new mongoose.Schema({
  topic: {
    type: String,
    require: true,
  },
  image: {
    type: String,
  },
  vocabularies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vocabulary',
  }],
});

const Unit = mongoose.model("Unit", UnitSchema);

export default Unit;