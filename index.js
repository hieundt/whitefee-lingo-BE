import 'dotenv/config'
import express from 'express';
import bodyParser from 'body-parser'
import userRoutes from './routes/userRoute.js'
import reportedUserRoutes from './routes/reportedUserRoute.js'
import reportedPostRoutes from './routes/reportedPostRoute.js'
import postRoutes from './routes/postRoute.js'
import commentRoutes from './routes/commentRoute.js'
import commentReactionRoutes from './routes/commentReactionRoute.js'
import votingRoutes from './routes/votingRoute.js'
import vocabularyRoutes from './routes/vocabularyRoute.js'
import unitRoutes from './routes/unitRoute.js'
import mongoose from 'mongoose';
const mongoString = process.env.DATABASE_URL

const app = express()

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database connected");
});

const port = 3000

// Global
app.use(bodyParser.json())

// User
app.use('/api/users', userRoutes)

// Reported post
app.use('/api/reportedUsers', reportedUserRoutes)

// Reported post
app.use('/api/reportedPosts', reportedPostRoutes)

// Post
app.use('/api/posts', postRoutes)

// Comment
app.use('/api/comments', commentRoutes)

// Comment reaction
app.use('/api/commentReactions', commentReactionRoutes)

// Voting
app.use('/api/votings', votingRoutes)

// Vocabulary
app.use('/api/vocabularies', vocabularyRoutes)

// Unit
app.use('/api/units', unitRoutes)


//Send info that page is not existed
app.use(function (req, res) {
  res.status(404).send({ 'status': '404', 'message': 'Page not found' });
});
app.listen(process.env.PORT || port, () => {
  console.log(`Server running on: ${port}`)
})
