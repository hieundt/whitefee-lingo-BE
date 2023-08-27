import vocabularyModel from '../model/vocabularyModel.js'

export const createVocabulary = async (req, res) => {
  const vocabulary = new vocabularyModel(req.body)
  try {
    await vocabulary.save()
    res.send({ 'status': '200', 'message': 'Create vocabulary successful' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const getAllVocabulary = async (req, res, next) => {
  const vocabulary = await vocabularyModel.find({})
  try {
    res.send(vocabulary)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const getVocabularyById = async (req, res, next) => {
  const { id } = req.params
  try {
    const vocabulary = await vocabularyModel.findById({ _id: id })
    if (!vocabulary) {
      res.send({ 'status': '400', 'message': 'Vocabulary not found' })
    }
    res.send(vocabulary)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const updateVocabulary = async (req, res) => {
  const { id } = req.params
  const {
    word,
    partOfSpeech,
    definition,
    audio,
    pronunciation,
    contextImage,
    example,
  } = req.body

  try {
    const vocabulary = await vocabularyModel.findById({ _id: id })
    if (!vocabulary) {
      res.send({ 'status': '400', 'message': 'Vocabulary not found' })
    }
    await vocabularyModel
      .findByIdAndUpdate({
        _id: id
      }, {
        word,
        partOfSpeech,
        definition,
        audio,
        pronunciation,
        contextImage,
        example,
      },)
    res.send({ 'status': "200", 'message': 'Update vocabulary successful' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const deleteVocabulary = async (req, res) => {
  const { id } = req.params
  try {
    const vocabulary = await vocabularyModel.findById({ _id: id })
    if (!vocabulary) {
      res.send({ 'status': '400', 'message': 'Vocabulary not found' })
    }
    await vocabularyModel.findByIdAndDelete({ _id: id })
    res.send({ 'status': "200", 'message': 'Delete vocabulary successful' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}