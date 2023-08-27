import 'dotenv/config'
import express from 'express';
import bodyParser from 'body-parser'
import userRoutes from './routes/userRoute.js'
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
