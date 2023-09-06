import toeicOptionModel from '../model/toeicOptionModel.js'

export const createVocabulary = async (res, req, next) => {
  const option = new toeicOptionModel(req.body)
  try {
    await option.save()
    res.send({ 'status': '200', 'message': 'Create option successful' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const getAllOption = async (req, res, next) => {
  const options = await toeicOptionModel.find({})
  try {
    res.send(options)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const getOptionById = async (req, res, next) => {
  const { id } = req.params
  try {
    const option = await toeicOptionModel.findById({ _id: id })
    if (!option) {
      res.send({ 'status': '400', 'message': 'Option not found' })
    }
    res.send(option)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const updateOption = async (res, req, next) => {
  const { id } = req.params
  const {
    content,
    correction,
  } = req.body
  try {
    const option = await toeicOptionModel.findById({ _id: id })
    if (!option) {
      res.send({ 'status': '400', 'message': 'Option not found' })
    }
    await toeicOptionModel
      .findByIdAndUpdate({
        _id: id
      }, {
        content,
        correction,
      },)
    res.send({ 'status': "200", 'message': 'Update option successful' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const deleteOption = async (res, req, next) => {
  const { id } = req.params
  try {
    const option = await toeicOptionModel.findById({ _id: id })
    if (!option) {
      res.send({ 'status': '400', 'message': 'Option not found' })
    }
    await toeicOptionModel.findByIdAndDelete({ _id: id })
    res.send({ 'status': "200", 'message': 'Delete option successful' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}