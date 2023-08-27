//checked
import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';

const VotingSchema = new mongoose.Schema({
  id: {
    type: String,
    default: () => uuidv4,
  },
  voting: {
    type: String,
    enum: ['NONE', 'UPVOTING', 'DOWNVOTING'],
    default: 'NONE',
  },

});

const Voting = mongoose.model("Voting", VotingSchema);

export default Voting;