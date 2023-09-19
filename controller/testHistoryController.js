import testHistoryModel from '../model/testHistoryModel.js'

export const createTestHistory = async (req, res, next) => {
  const history = new testHistoryModel(req.body)
  try {
    await history.save();
    res.send({ 'status': '200', 'message': 'Create history successful' });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export const getAllTestHistory = async (req, res, next) => {
  try {
    const history = await testHistoryModel.find({});
    res.send(history);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export const getTestHistoryById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const history = await testHistoryModel.findById({ _id: id })
    if (!history) {
      res.send({ 'status': '400', 'message': 'History not found' })
      return
    }
    res.send(history);
  }
  catch (error) {
    res.status(500).send(error.message)
  }
}

export const updateTestHistory = async (req, res, next) => {
  const { id } = req.params
  const { testId, totalScore, testDate } = req.body
  try {
    const history = await testHistoryModel.findById({ _id: id })
    if (!history) {
      res.send({ 'status': '400', 'message': 'Update history not found' })
      return
    }
    await testHistoryModel.findByIdAndUpdate({ _id: id }, { testId, totalScore, testDate })
    console.log({ topic, image })
    res.send({ 'status': '200', 'message': 'Update history successful' });
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const deleteTestHistory = async (req, res, next) => {
  const { id } = req.params
  try {
    const unit = await testHistoryModel.findById({ _id: id })
    if (!unit) {
      res.send({ 'status': '400', 'message': 'Delete unit not found' })
    }
    await testHistoryModel.findByIdAndDelete({ _id: id })
    res.send({ 'status': '200', 'message': 'Delete unit successful' });
  } catch (error) {
    res.status(500).send(error.message)
  }
}

