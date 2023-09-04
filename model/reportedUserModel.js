//checked
import mongoose from "mongoose";

const ReportedUserSchema = new mongoose.Schema({
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