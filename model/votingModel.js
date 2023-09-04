//checked
import mongoose from "mongoose";

const VotingSchema = new mongoose.Schema({
  voting: {
    type: String,
    enum: ['NONE', 'UPVOTING', 'DOWNVOTING'],
    default: 'NONE',
    uppercase: true,
  },

});

const Voting = mongoose.model("Voting", VotingSchema);

export default Voting;