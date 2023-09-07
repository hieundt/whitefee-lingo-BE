import toeicTestModel from '../model/toeicTestModel.js'

export const createToeicTest = async (req, res, next) => {
  const test = new toeicTestModel(req.body)
  try {
    await test.save();
    res.send({ 'status': '200', 'message': 'Create test successful' });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export const getAllToeicTest = async (req, res, next) => {
  try {
    const tests = await toeicTestModel.find({});
    res.send(tests);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export const getToeicTestById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const test = await toeicTestModel.findById({ _id: id })
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

export const updateToeicTest = async (req, res, next) => {
  const { id } = req.params
  const {
    title,
    image,
    promt,
    //listeningScore,
    //readingScore,
  } = req.body
  try {
    const test = await toeicTestModel.findById({ _id: id })
    if (!test) {
      res.send({ 'status': '400', 'message': 'Update test not found' })
      return
    }
    await unitModel
      .findByIdAndUpdate({ _id: id },
        {
          title,
          image,
          promt,
          //listeningScore,
          //readingScore,
        })
    console.log({ topic, image })
    res.send({ 'status': '200', 'message': 'Update test successful' });
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const deleteToeicTest = async (req, res, next) => {
  const { id } = req.params
  try {
    const test = await toeicTestModel.findById({ _id: id })
    if (!test) {
      res.send({ 'status': '400', 'message': 'Delete test not found' })
    }
    await toeicTestModel.findByIdAndDelete({ _id: id })
    res.send({ 'status': '200', 'message': 'Delete test successful' });
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const addToeicTestQuestion = async (req, res, next) => {
  const { id } = req.params
  const { questions } = req.body
  try {
    const unit = await toeicTestModel.findById({ _id: id })
    if (!unit) {
      res.send({ 'status': '400', 'message': 'Update test not found' })
    }
    await toeicTestModel.findByIdAndUpdate({ _id: id }, { $push: { questions } })
    console.log(vocabularies)
    res.send({ 'status': '200', 'message': 'Update test sucessful' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const removeToeicTestQuestion = async (req, res) => {

}



