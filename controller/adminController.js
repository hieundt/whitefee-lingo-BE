import adminModel from '../model/adminModel.js'

export const createAdmin = async (req, res, next) => {
  const admin = new adminModel(req.body)
  try {
    await admin.save();
    res.send({ 'status': '200', 'message': 'Create admin successful' });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export const getAllAdmin = async (req, res, next) => {
  try {
    const admins = await adminModel.find({});
    res.send(admins);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export const getAdminById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const admin = await adminModel.findById({ _id: id })
    if (!admin) {
      res.send({ 'status': '400', 'message': 'Admin not found' })
      return
    }
    res.send(admin);
  }
  catch (error) {
    res.status(500).send(error.message)
  }
}

// export const updateMod = async (req, res) => {
//   const { id } = req.params
//   try {
//     const mod = await adminModel.findById({ _id: id })
//     if (!mod) {
//       res.send({ 'status': '400', 'message': 'Update mod not found' })
//       return
//     }
//     await adminModel.findByIdAndUpdate({ _id: id })
//     res.send({ 'status': '200', 'message': 'Update mod successful' });
//   } catch (error) {
//     res.status(500).send(error.message)
//   }
// }


export const deleteAdmin = async (req, res, next) => {
  const { id } = req.params
  try {
    const admin = await adminModel.findById({ _id: id })
    if (!admin) {
      res.send({ 'status': '400', 'message': 'Delete admin not found' })
    }
    await adminModel.findByIdAndDelete({ _id: id })
    res.send({ 'status': '200', 'message': 'Delete admin successful' });
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const addPendingPost = async (req, res, next) => {
  const { id } = req.params
  const { pendingPosts } = req.body
  try {
    const admin = await adminModel.findById({ _id: id })
    if (!admin) {
      res.send({ 'status': '400', 'message': 'Update mod not found' })
    }
    await adminModel.findByIdAndUpdate({ _id: id }, { $push: { pendingPosts } })
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
    const admin = await adminModel.findById({ _id: id })
    if (!admin) {
      res.send({ 'status': '400', 'message': 'Update mod not found' })
    }
    await adminModel.findByIdAndUpdate({ _id: id }, { $push: { reportedUsers } })
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
    const admin = await adminModel.findById({ _id: id })
    if (!admin) {
      res.send({ 'status': '400', 'message': 'Update mod not found' })
    }
    await adminModel.findByIdAndUpdate({ _id: id }, { $push: { reportedPosts } })
    res.send({ 'status': '200', 'message': 'Update mod sucessful' })
  } catch (error) {
    res.status(500).send(error.message)
  }

}

export const removeReportedPost = async (req, res, next) => {

}