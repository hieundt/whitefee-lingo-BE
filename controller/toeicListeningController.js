import toeicListeningModel from '../model/toeicListeningModel.js'

// Listening
export const createToeicListening = async (req, res, next) => {
  const listening = new toeicListeningModel(req.body)
  try {
    await listening.save();
    res.send({ 'status': '200', 'message': 'Create toeic successful' });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export const getAllToeicListening = async (req, res, next) => {
  try {
    const listenings = await toeicListeningModel.find({});
    res.send(listenings);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export const getToeicListeningById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const listening = await toeicListeningModel.findById({ _id: id })
      .populate('questionBlocks')
    if (!listening) {
      res.send({ 'status': '400', 'message': 'Toeic not found' })
      return
    }
    res.send(listening);
  }
  catch (error) {
    res.status(500).send(error.message)
  }
}

export const updateToeicListening = async (req, res, next) => {
  const { id } = req.params
  const { direction, audio, contextImage } = req.body
  try {
    const listening = await toeicListeningModel.findById({ _id: id })
    if (!listening) {
      res.send({ 'status': '400', 'message': 'Update toeic not found' })
      return
    }
    await toeicListeningModel.findByIdAndUpdate({ _id: id }, { direction, audio, contextImage })
    res.send({ 'status': '200', 'message': 'Update question successful' });
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const addToeicListeningQuestionBlock = async (req, res, next) => {
  const { id } = req.params
  const { toeicQuestionBlocks } = req.bod
  try {
    const unit = await toeicListeningModel.findById({ _id: id })
    if (!unit) {
      res.send({ 'status': '400', 'message': 'Update toeic not found' })
    }
    await toeicListeningModel.findByIdAndUpdate({ _id: id }, { $push: { toeicQuestionBlocks } })
    res.send({ 'status': '200', 'message': 'Update toeic sucessful' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const removeToeicListeningQuestionBlock = async (req, res) => {
}

export const deleteToeicListening = async (req, res, next) => {
  const { id } = req.params
  try {
    const unit = await toeicListeningModel.findById({ _id: id })
    if (!unit) {
      res.send({ 'status': '400', 'message': 'Delete toeic not found' })
    }
    await toeicListeningModel.findByIdAndDelete({ _id: id })
    res.send({ 'status': '200', 'message': 'Delete toeic successful' });
  } catch (error) {
    res.status(500).send(error.message)
  }
}
