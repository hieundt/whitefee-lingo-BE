import unitModel from '../model/unitModel.js'

export const createUnit = async (req, res, next) => {
  const unit = new unitModel(req.body)
  try {
    await unit.save();
    res.send({ 'status': '200', 'message': 'Create unit successful' });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export const getAllUnit = async (req, res, next) => {
  try {
    const units = await unitModel.find({});
    res.send(units);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export const getUnitById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const unit = await unitModel.findById({ _id: id })
      .populate('vocabularies')
    if (!unit) {
      res.send({ 'status': '400', 'message': 'Unit not found' })
      return
    }
    res.send(unit);
  }
  catch (error) {
    res.status(500).send(error.message)
  }
}

export const updateUnit = async (req, res, next) => {
  const { id } = req.params
  const { topic, image } = req.body
  try {
    const unit = await unitModel.findById({ _id: id })
    if (!unit) {
      res.send({ 'status': '400', 'message': 'Update unit not found' })
      return
    }
    await unitModel.findByIdAndUpdate({ _id: id }, { topic, image })
    console.log({ topic, image })
    res.send({ 'status': '200', 'message': 'Update unit successful' });
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const addUnitVoca = async (req, res, next) => {
  const { id } = req.params
  const { vocabularies } = req.body
  try {
    const unit = await unitModel.findById({ _id: id })
    if (!unit) {
      res.send({ 'status': '400', 'message': 'Update unit not found' })
    }
    await unitModel.findByIdAndUpdate({ _id: id }, { $push: { vocabularies } })
    console.log(vocabularies)
    res.send({ 'status': '200', 'message': 'Update unit sucessful' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

//! CANT REMOVE VOCABULARY
// export const removeUnitVoca = async (req, res) => {
//   const { id } = req.params
//   const { vocabularies } = req.body
//   const temp = vocabularies[0]

//   try {
//     await unitModel.updateOne
//       ({ _id: id.toString() }, {
//         $pull: { vocabularies: { _id: mongoose.Types.ObjectId(temp.toString()) } }
//       }).exec()

//     res.status(200).send("Completed")




//   } catch (error) {
//     res.status(500).send(error.message)
//   }
// }

export const deleteUnit = async (req, res, next) => {
  const { id } = req.params
  try {
    const unit = await unitModel.findById({ _id: id })
    if (!unit) {
      res.send({ 'status': '400', 'message': 'Delete unit not found' })
    }
    await unitModel.findByIdAndDelete({ _id: id })
    res.send({ 'status': '200', 'message': 'Delete unit successful' });
  } catch (error) {
    res.status(500).send(error.message)
  }
}

