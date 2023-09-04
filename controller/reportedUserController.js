import reportedUserModel from '../model/reportedUserModel.js'

export const createReportedUser = async (res, req, next) => {
  const reportedUser = new reportedUserModel(req.body)
  try {
    await reportedUser.save();
    res.send({ 'status': '200', 'message': 'Create reported user successful' });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export const getAllReportedUser = async (req, res, next) => {
  try {
    const reportedUsers = await reportedUserModel.find({});
    res.send(reportedUsers);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export const getReportedUserById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const reportedUser = await reportedUserModel.findById({ _id: id })
    if (!reportedUser) {
      res.send({ 'status': '400', 'message': 'Reported user not found' })
      return
    }
    res.send(reportedUser);
  }
  catch (error) {
    res.status(500).send(error.message)
  }
}


//! Update de lam gi ?
// export const updateReportedUser = async (req, res) => {
//   const { id } = req.params
//   const { description } = req.body
//   try {
//     const reportedPost = await reportedPostModel.findById({ _id: id })
//     if (!reportedPost) {
//       res.send({ 'status': '400', 'message': 'Update reported user not found' })
//       return
//     }
//     await reportedPostModel.findByIdAndUpdate({ _id: id }, { description })
//     res.send({ 'status': '200', 'message': 'Update comment reported user successful' });
//   } catch (error) {
//     res.status(500).send(error.message)
//   }
// }


export const deleteReportedUser = async (res, req, next) => {
  const { id } = req.params
  try {
    const reportedUser = await reportedUserModel.findById({ _id: id })
    if (!reportedUser) {
      res.send({ 'status': '400', 'message': 'Delete reported user not found' })
    }
    await reportedUserModel.findByIdAndDelete({ _id: id })
    res.send({ 'status': '200', 'message': 'Delete reported user successful' });
  } catch (error) {
    res.status(500).send(error.message)
  }
}

