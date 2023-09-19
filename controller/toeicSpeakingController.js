
import toeicSpeakingModel from '../model/toeicSpeakingModel.js'

// Speaking
export const createToeicSpeaking = async (req, res, next) => {
  const speaking = new toeicSpeakingModel(req.body)
  try {
    await speaking.save();
    res.send({ 'status': '200', 'message': 'Create toeic successful' });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export const getAllToeicSpeaking = async (req, res, next) => {
  try {
    const speakings = await toeicSpeakingModel.find({});
    res.send(speakings);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export const getToeicSpeakingById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const speaking = await toeicSpeakingModel.findById({ _id: id })
      .populate('speakingResponses')
    if (!speaking) {
      res.send({ 'status': '400', 'message': 'Toeic not found' })
      return
    }
    res.send(speaking);
  }
  catch (error) {
    res.status(500).send(error.message)
  }
}

export const updateToeicSpeaking = async (req, res, next) => {
  const { id } = req.params
  const { direction, releaseDate, } = req.body
  try {
    const speaking = await toeicSpeakingModel.findById({ _id: id })
    if (!speaking) {
      res.send({ 'status': '400', 'message': 'Update toeic not found' })
      return
    }
    await toeicSpeakingModel.findByIdAndUpdate({ _id: id }, { direction, releaseDate, })
    res.send({ 'status': '200', 'message': 'Update toeic successful' });
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const addToeicSpeakingContext = async (req, res, next) => {
  const { id } = req.params
  const { contexts } = req.bod
  try {
    const speaking = await toeicSpeakingModel.findById({ _id: id })
    if (!speaking) {
      res.send({ 'status': '400', 'message': 'Update toeic not found' })
    }
    await toeicSpeakingModel.findByIdAndUpdate({ _id: id }, { $push: { contexts } })
    res.send({ 'status': '200', 'message': 'Update toeic sucessful' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const removeToeicSpeakingContext = async (req, res) => {
}

export const addToeicSpeakingResponse = async (req, res, next) => {
  const { id } = req.params
  const { speakingResponses } = req.bod
  try {
    const speaking = await toeicSpeakingModel.findById({ _id: id })
    if (!speaking) {
      res.send({ 'status': '400', 'message': 'Update toeic not found' })
    }
    await toeicSpeakingModel.findByIdAndUpdate({ _id: id }, { $push: { speakingResponses } })
    res.send({ 'status': '200', 'message': 'Update toeic sucessful' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const removeToeicSpeakingResponse = async (req, res) => {
}

export const deleteToeicSpeaking = async (req, res, next) => {
  const { id } = req.params
  try {
    const speaking = await toeicSpeakingModel.findById({ _id: id })
    if (!speaking) {
      res.send({ 'status': '400', 'message': 'Delete toeic not found' })
    }
    await toeicSpeakingModel.findByIdAndDelete({ _id: id })
    res.send({ 'status': '200', 'message': 'Delete toeic successful' });
  } catch (error) {
    res.status(500).send(error.message)
  }
}
