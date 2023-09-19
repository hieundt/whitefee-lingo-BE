import 'dotenv/config'
import express from 'express';
import bodyParser from 'body-parser'

import userRoutes from './routes/userRoute.js'
import reportedUserRoutes from './routes/reportedUserRoute.js'
import reportedPostRoutes from './routes/reportedPostRoute.js'

import adminRoutes from './routes/adminRoute.js'
import modRoutes from './routes/modRoute.js'

import postRoutes from './routes/postRoute.js'
import commentRoutes from './routes/commentRoute.js'
import commentReactionRoutes from './routes/commentReactionRoute.js'
import votingRoutes from './routes/votingRoute.js'

import vocabularyRoutes from './routes/vocabularyRoute.js'
import unitRoutes from './routes/unitRoute.js'

import testRoutes from './routes/testRoute.js'
import testHistoryRoutes from './routes/testHistoryRoute.js';
import testHasQuestionRoutes from './routes/testHasQuestionRoute.js'

import toeicListeningRoutes from './routes/toeicListeningRoute.js'
import toeicReadingRoutes from './routes/toeicReadingRoute.js'
import toeicWritingRoutes from './routes/toeicWritingRoute.js'
import toeicSpeakingRoutes from './routes/toeicSpeakingRoute.js'

import toeicQuestionBlockRoutes from './routes/toeicQuestionBlockRoute.js'
import toeicOptionRoutes from './routes/toeicOptionRoute.js'

import toeicWritingResponseRoutes from './routes/toeicWritingResponseRoute.js'
import toeicSpeakingResponseRoutes from './routes/toeicSpeakingResponseRoute.js'

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

// Admin
app.use('/api/admins', adminRoutes)

// Mod
app.use('/api/mods', modRoutes)

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

//Test
app.use('/api/tests', testRoutes)

// Test history
app.use('/api/testHistories', testHistoryRoutes)

// Test has question
app.use('/api/testHasQuestions', testHasQuestionRoutes)

// Toeic listening
app.use('/api/toeicListenings', toeicListeningRoutes)

// Toeic reading
app.use('/api/toeicReadings', toeicReadingRoutes)

// Toeic writing
app.use('/api/toeicWritings', toeicWritingRoutes)

// Toeic speaking
app.use('/api/toeicSpeakings', toeicSpeakingRoutes)

// Question block
app.use('/api/toeicQuestionBlocks', toeicQuestionBlockRoutes)

// Option
app.use('/api/toeicOptions', toeicOptionRoutes)

// Writing response
app.use('/api/toeicWritingResponses', toeicWritingResponseRoutes)

// Speaking response
app.use('/api/toeicSpeakingResponses', toeicSpeakingResponseRoutes)

//Send info that page is not existed
app.use(function (req, res) {
  res.status(404).send({ 'status': '404', 'message': 'Page not found' });
});
app.listen(process.env.PORT || port, () => {
  console.log(`Server running on: ${port}`)
})
