import toeicSpeakingResponseModel from '../model/toeicSpeakingResponseModel.js'

export const createToeicSpeakingResponse = async (req, res, next) => {
  const response = new toeicSpeakingResponseModel(req.body)
  try {
    await response.save()
    res.send({ 'status': '200', 'message': 'Create response successful' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const getAllToeicSpeakingResponse = async (req, res, next) => {
  const responses = await toeicSpeakingResponseModel.find({})
  try {
    res.send(responses)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const getToeicSpeakingResponseById = async (req, res, next) => {
  const { id } = req.params
  try {
    const response = await toeicSpeakingResponseModel.findById({ _id: id })
    if (!response) {
      res.send({ 'status': '400', 'message': 'Response not found' })
    }
    res.send(response)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const updateToeicSpeakingResponse = async (req, res, next) => {
  const { id } = req.params
  const {
    question,
    source,
    score,
  } = req.body

  try {
    const response = await toeicSpeakingResponseModel.findById({ _id: id })
    if (!response) {
      res.send({ 'status': '400', 'message': 'Response not found' })
    }
    await toeicSpeakingResponseModel
      .findByIdAndUpdate({
        _id: id
      }, {
        question,
        source,
        score,
      },)
    res.send({ 'status': "200", 'message': 'Update response successful' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const deleteToeicSpeakingResponse = async (req, res, next) => {
  const { id } = req.params
  try {
    const response = await toeicSpeakingResponseModel.findById({ _id: id })
    if (!response) {
      res.send({ 'status': '400', 'message': 'Response not found' })
    }
    await toeicSpeakingResponseModel.findByIdAndDelete({ _id: id })
    res.send({ 'status': "200", 'message': 'Delete response successful' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}