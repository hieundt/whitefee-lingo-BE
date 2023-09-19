import toeicReadingModel from '../model/toeicReadingModel.js'

// Reading
export const createToeicReading = async (req, res, next) => {
  const reading = new toeicReadingModel(req.body)
  try {
    await reading.save();
    res.send({ 'status': '200', 'message': 'Create toeic successful' });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export const getAllToeicReading = async (req, res, next) => {
  try {
    const readings = await toeicReadingModel.find({});
    res.send(readings);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export const getToeicReadingById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const reading = await toeicReadingModel.findById({ _id: id })
      .populate('questionBlocks')
    if (!reading) {
      res.send({ 'status': '400', 'message': 'Toeic not found' })
      return
    }
    res.send(reading);
  }
  catch (error) {
    res.status(500).send(error.message)
  }
}

export const updateToeicReading = async (req, res, next) => {
  const { id } = req.params
  const { direction, passage, information } = req.body
  try {
    const reading = await toeicReadingModel.findById({ _id: id })
    if (!reading) {
      res.send({ 'status': '400', 'message': 'Update toeic not found' })
      return
    }
    await toeicReadingModel.findByIdAndUpdate({ _id: id }, { direction, passage, information })
    res.send({ 'status': '200', 'message': 'Update toeic successful' });
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const addToeicReadingQuestionBlock = async (req, res, next) => {
  const { id } = req.params
  const { toeicQuestionBlocks } = req.bod
  try {
    const reading = await toeicReadingModel.findById({ _id: id })
    if (!reading) {
      res.send({ 'status': '400', 'message': 'Update toeic not found' })
    }
    await toeicReadingModel.findByIdAndUpdate({ _id: id }, { $push: { toeicQuestionBlocks } })
    res.send({ 'status': '200', 'message': 'Update toeic sucessful' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const removeToeicReadingQuestionBlock = async (req, res) => {
}

export const deleteToeicReading = async (req, res, next) => {
  const { id } = req.params
  try {
    const reading = await toeicReadingModel.findById({ _id: id })
    if (!reading) {
      res.send({ 'status': '400', 'message': 'Delete toeic not found' })
    }
    await toeicReadingModel.findByIdAndDelete({ _id: id })
    res.send({ 'status': '200', 'message': 'Delete toeic successful' });
  } catch (error) {
    res.status(500).send(error.message)
  }
}