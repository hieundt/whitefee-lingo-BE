
import toeicWritingModel from '../model/toeicWritingModel.js'

// Writing
export const createToeicWriting = async (req, res, next) => {
  const writing = new toeicWritingModel(req.body)
  try {
    await writing.save();
    res.send({ 'status': '200', 'message': 'Create toeic successful' });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export const getAllToeicWriting = async (req, res, next) => {
  try {
    const writings = await toeicWritingModel.find({});
    res.send(writings);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export const getToeicWritingById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const writing = await toeicWritingModel.findById({ _id: id })
      .populate('writingResponses')
    if (!writing) {
      res.send({ 'status': '400', 'message': 'Toeic not found' })
      return
    }
    res.send(writing);
  }
  catch (error) {
    res.status(500).send(error.message)
  }
}

export const updateToeicWriting = async (req, res, next) => {
  const { id } = req.params
  const { direction, releaseDate } = req.body
  try {
    const Writing = await toeicWritingModel.findById({ _id: id })
    if (!Writing) {
      res.send({ 'status': '400', 'message': 'Update toeic not found' })
      return
    }
    await toeicWritingModel.findByIdAndUpdate({ _id: id }, { direction, releaseDate })
    res.send({ 'status': '200', 'message': 'Update toeic successful' });
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const addToeicWritingContext = async (req, res, next) => {
  const { id } = req.params
  const { contexts } = req.bod
  try {
    const writing = await toeicWritingModel.findById({ _id: id })
    if (!writing) {
      res.send({ 'status': '400', 'message': 'Update toeic not found' })
    }
    await toeicWritingModel.findByIdAndUpdate({ _id: id }, { $push: { contexts } })
    res.send({ 'status': '200', 'message': 'Update toeic sucessful' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const removeToeicWritingContext = async (req, res) => {
}

export const addToeicWritingResponse = async (req, res, next) => {
  const { id } = req.params
  const { writingResponses } = req.bod
  try {
    const writing = await toeicWritingModel.findById({ _id: id })
    if (!writing) {
      res.send({ 'status': '400', 'message': 'Update toeic not found' })
    }
    await toeicWritingModel.findByIdAndUpdate({ _id: id }, { $push: { writingResponses } })
    res.send({ 'status': '200', 'message': 'Update toeic sucessful' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const removeToeicWritingResponses = async (req, res) => {
}

export const deleteToeicWriting = async (req, res, next) => {
  const { id } = req.params
  try {
    const writing = await toeicWritingModel.findById({ _id: id })
    if (!writing) {
      res.send({ 'status': '400', 'message': 'Delete toeic not found' })
    }
    await toeicWritingModel.findByIdAndDelete({ _id: id })
    res.send({ 'status': '200', 'message': 'Delete toeic successful' });
  } catch (error) {
    res.status(500).send(error.message)
  }
}
