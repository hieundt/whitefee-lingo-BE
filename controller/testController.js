import testModel from '../model/testModel.js'

export const createTest = async (req, res, next) => {
  const test = new testModel(req.body)
  try {
    await test.save();
    res.send({ 'status': '200', 'message': 'Create test successful' });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export const getAllTest = async (req, res, next) => {
  try {
    const tests = await testModel.find({});
    res.send(tests);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export const getTestById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const test = await testModel.findById({ _id: id })
      .populate('questions')
    if (!test) {
      res.send({ 'status': '400', 'message': 'Test not found' })
      return
    }
    res.send(test);
  }
  catch (error) {
    res.status(500).send(error.message)
  }
}

export const updateTest = async (req, res, next) => {
  const { id } = req.params
  const {
    title,
    image,
    testType,
  } = req.body
  try {
    const test = await testModel.findById({ _id: id })
    if (!test) {
      res.send({ 'status': '400', 'message': 'Update test not found' })
      return
    }
    await testModel
      .findByIdAndUpdate({ _id: id },
        {
          title,
          image,
          testType,
        })
    res.send({ 'status': '200', 'message': 'Update test successful' });
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const deleteTest = async (req, res, next) => {
  const { id } = req.params
  try {
    const test = await testModel.findById({ _id: id })
    if (!test) {
      res.send({ 'status': '400', 'message': 'Delete test not found' })
    }
    await testModel.findByIdAndDelete({ _id: id })
    res.send({ 'status': '200', 'message': 'Delete test successful' });
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const addTestQuestion = async (req, res, next) => {
  const { id } = req.params
  const { questions } = req.body
  try {
    const unit = await testModel.findById({ _id: id })
    if (!unit) {
      res.send({ 'status': '400', 'message': 'Update test not found' })
    }
    await testModel.findByIdAndUpdate({ _id: id }, { $push: { questions } })
    console.log(vocabularies)
    res.send({ 'status': '200', 'message': 'Update test sucessful' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const removeTestQuestion = async (req, res) => {

}



