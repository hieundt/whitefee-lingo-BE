import toeicQuestionBlockModel from '../model/toeicQuestionBlockModel.js'

export const createToeicQuestionBlock = async (res, req, next) => {
  const questionBlock = new toeicQuestionBlockModel(req.body)
  try {
    await questionBlock.save()
    res.send({ 'status': '200', 'message': 'Create question block successful' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const getAllToeicQuestionBlock = async (req, res, next) => {
  const questionBlocks = await toeicQuestionBlockModel.find({})
  try {
    res.send(questionBlocks)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const getToeicQuestionBlockById = async (req, res, next) => {
  const { id } = req.params
  try {
    const questionBlock = await toeicQuestionBlockModel.findById({ _id: id })
    if (!questionBlock) {
      res.send({ 'status': '400', 'message': 'Question block not found' })
    }
    res.send(questionBlock)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const updateToeicQuestionBlock = async (res, req, next) => {
  const { id } = req.params
  const {
    question,
    correctAnswer,
    explaination,
    score,
  } = req.body
  try {
    const option = await toeicQuestionBlockModel.findById({ _id: id })
    if (!option) {
      res.send({ 'status': '400', 'message': 'Question block not found' })
    }
    await toeicQuestionBlockModel
      .findByIdAndUpdate({
        _id: id
      }, {
        question,
        correctAnswer,
        explaination,
        score,
      },)
    res.send({ 'status': "200", 'message': 'Update question block successful' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const deleteToeicQuestionBlock = async (res, req, next) => {
  const { id } = req.params
  try {
    const questionBlock = await toeicQuestionBlockModel.findById({ _id: id })
    if (!questionBlock) {
      res.send({ 'status': '400', 'message': 'Delete question block not found' })
    }
    await toeicQuestionBlockModel.findByIdAndDelete({ _id: id })
    res.send({ 'status': "200", 'message': 'Delete question block successful' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const addToeicQuestionBlockOption = async (req, res, next) => {
  const { id } = req.params
  const { options } = req.body
  try {
    const unit = await unitModel.findById({ _id: id })
    if (!unit) {
      res.send({ 'status': '400', 'message': 'Update question block not found' })
    }
    await unitModel.findByIdAndUpdate({ _id: id }, { $push: { options } })
    console.log(options)
    res.send({ 'status': '200', 'message': 'Update question block sucessful' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}