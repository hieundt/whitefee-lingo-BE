import toeicWritingResponseModel from '../model/toeicWritingResponseModel.js'

export const createToeicWritingResponse = async (req, res, next) => {
  const response = new toeicWritingResponseModel(req.body)
  try {
    await response.save()
    res.send({ 'status': '200', 'message': 'Create response successful' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const getAllToeicWritingResponse = async (req, res, next) => {
  const responses = await toeicWritingResponseModel.find({})
  try {
    res.send(responses)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const getToeicWritingResponseById = async (req, res, next) => {
  const { id } = req.params
  try {
    const response = await toeicWritingResponseModel.findById({ _id: id })
    if (!response) {
      res.send({ 'status': '400', 'message': 'Response not found' })
    }
    res.send(response)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const updateToeicWritingResponse = async (req, res, next) => {
  const { id } = req.params
  const {
    direction,
    source,
    score,
  } = req.body

  try {
    const response = await toeicWritingResponseModel.findById({ _id: id })
    if (!response) {
      res.send({ 'status': '400', 'message': 'Response not found' })
    }
    await toeicWritingResponseModel
      .findByIdAndUpdate({
        _id: id
      }, {
        direction,
        source,
        score,
      },)
    res.send({ 'status': "200", 'message': 'Update response successful' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const deleteToeicWritingResponse = async (req, res, next) => {
  const { id } = req.params
  try {
    const response = await toeicWritingResponseModel.findById({ _id: id })
    if (!response) {
      res.send({ 'status': '400', 'message': 'Response not found' })
    }
    await toeicWritingResponseModel.findByIdAndDelete({ _id: id })
    res.send({ 'status': "200", 'message': 'Delete response successful' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}