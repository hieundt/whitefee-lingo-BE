import testHasQuestionModel from '../model/testHasQuestionModel.js'

export const createTestHasQuestion = async (req, res, next) => {
  const question = new testHasQuestionModel(req.body)
  try {
    await question.save();
    res.send({ 'status': '200', 'message': 'Create question successful' });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export const getAllTestHasQuestion = async (req, res, next) => {
  try {
    const questions = await testHasQuestionModel.find({});
    res.send(questions);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export const getTestHasQuestionById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const question = await testHasQuestionModel.findById({ _id: id })
    if (!question) {
      res.send({ 'status': '400', 'message': 'Question not found' })
      return
    }
    res.send(question);
  }
  catch (error) {
    res.status(500).send(error.message)
  }
}

export const updateTestHasQuestion = async (req, res, next) => {
  const { id } = req.params
  const { questionId, questionType } = req.body
  try {
    const question = await testHasQuestionModel.findById({ _id: id })
    if (!question) {
      res.send({ 'status': '400', 'message': 'Update question not found' })
      return
    }
    await testHasQuestionModel.findByIdAndUpdate({ _id: id }, { questionId, questionType })
    console.log({ topic, image })
    res.send({ 'status': '200', 'message': 'Update question successful' });
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const deleteTestHasQuestion = async (req, res, next) => {
  const { id } = req.params
  try {
    const question = await testHasQuestionModel.findById({ _id: id })
    if (!question) {
      res.send({ 'status': '400', 'message': 'Delete question not found' })
    }
    await testHasQuestionModel.findByIdAndDelete({ _id: id })
    res.send({ 'status': '200', 'message': 'Delete question successful' });
  } catch (error) {
    res.status(500).send(error.message)
  }
}

