import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid"

const OptionSchema = new mongoose.Schema({
  id: {
    type: String,
    default: () => uuidv4,
  },
  content: {
    type: String,
  },
  corection: {
    type: Boolean,
  },
});

const Option = mongoose.model("Option", OptionSchema);

export default Option;