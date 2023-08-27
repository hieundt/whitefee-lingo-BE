//checked
import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid"

const ReportedUserSchema = new mongoose.Schema({
  id: {
    type: String,
    default: () => uuidv4,
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  reporterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  description: {
    type: String,
  },
});

const ReportedUser = mongoose.model("ReportedUser", ReportedUserSchema);

export default ReportedUser;