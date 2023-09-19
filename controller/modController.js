import modModel from '../model/modModel.js'

export const createMod = async (req, res, next) => {
  const mod = new modModel(req.body)
  try {
    await mod.save();
    res.send({ 'status': '200', 'message': 'Create mod successful' });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export const getAllMod = async (req, res, next) => {
  try {
    const mods = await modModel.find({});
    res.send(mods);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export const getModById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const mod = await modModel.findById({ _id: id })
    if (!mod) {
      res.send({ 'status': '400', 'message': 'Mod not found' })
      return
    }
    res.send(mod);
  }
  catch (error) {
    res.status(500).send(error.message)
  }
}

// export const updateMod = async (req, res) => {
//   const { id } = req.params
//   try {
//     const mod = await modModel.findById({ _id: id })
//     if (!mod) {
//       res.send({ 'status': '400', 'message': 'Update mod not found' })
//       return
//     }
//     await modModel.findByIdAndUpdate({ _id: id })
//     res.send({ 'status': '200', 'message': 'Update mod successful' });
//   } catch (error) {
//     res.status(500).send(error.message)
//   }
// }


export const deleteMod = async (req, res, next) => {
  const { id } = req.params
  try {
    const mod = await modModel.findById({ _id: id })
    if (!mod) {
      res.send({ 'status': '400', 'message': 'Delete mod not found' })
    }
    await modModel.findByIdAndDelete({ _id: id })
    res.send({ 'status': '200', 'message': 'Delete mod successful' });
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const addPendingPost = async (req, res, next) => {
  const { id } = req.params
  const { pendingPosts } = req.body
  try {
    const mod = await modModel.findById({ _id: id })
    if (!mod) {
      res.send({ 'status': '400', 'message': 'Update mod not found' })
    }
    await modModel.findByIdAndUpdate({ _id: id }, { $push: { pendingPosts } })
    res.send({ 'status': '200', 'message': 'Update mod sucessful' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const removePendingPost = async (req, res, next) => {

}

export const addReportedUser = async (req, res, next) => {
  const { id } = req.params
  const { reportedUsers } = req.body
  try {
    const mod = await modModel.findById({ _id: id })
    if (!mod) {
      res.send({ 'status': '400', 'message': 'Update mod not found' })
    }
    await modModel.findByIdAndUpdate({ _id: id }, { $push: { reportedUsers } })
    res.send({ 'status': '200', 'message': 'Update mod sucessful' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const removeReportedUser = async (req, res, next) => {

}

export const addReportedPost = async (req, res, next) => {
  const { id } = req.params
  const { reportedPosts } = req.body
  try {
    const mod = await modModel.findById({ _id: id })
    if (!mod) {
      res.send({ 'status': '400', 'message': 'Update mod not found' })
    }
    await modModel.findByIdAndUpdate({ _id: id }, { $push: { reportedPosts } })
    res.send({ 'status': '200', 'message': 'Update mod sucessful' })
  } catch (error) {
    res.status(500).send(error.message)
  }

}

export const removeReportedPost = async (req, res, next) => {

}