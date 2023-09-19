//checked
import mongoose from "mongoose";

const VotingSchema = new mongoose.Schema({
  voting: {
    type: String,
    enum: ['none', 'upvoting', 'downvoting'],
    default: 'none',
    uppercase: true,
  },

});

const Voting = mongoose.model("Voting", VotingSchema);

export default Voting;