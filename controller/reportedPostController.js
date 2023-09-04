import reportedPostModel from '../model/reportedPostModel.js'

export const createReportedPost = async (res, req, next) => {
  const reportedPost = new reportedPostModel(req.body)
  try {
    await reportedPost.save();
    res.send({ 'status': '200', 'message': 'Create reported post successful' });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export const getAllReportedPost = async (req, res, next) => {
  try {
    const reportedPosts = await reportedPostModel.find({});
    res.send(reportedPosts);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export const getReportedPostById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const reportedPost = await reportedPostModel.findById({ _id: id })
    if (!reportedPost) {
      res.send({ 'status': '400', 'message': 'Reported post not found' })
      return
    }
    res.send(reportedPost);
  }
  catch (error) {
    res.status(500).send(error.message)
  }
}


//! Update de lam gi ?
// export const updateReportedPost = async (req, res) => {
//   const { id } = req.params
//   const { description } = req.body
//   try {
//     const reportedPost = await reportedPostModel.findById({ _id: id })
//     if (!reportedPost) {
//       res.send({ 'status': '400', 'message': 'Update reported post not found' })
//       return
//     }
//     await reportedPostModel.findByIdAndUpdate({ _id: id }, { description })
//     res.send({ 'status': '200', 'message': 'Update comment reported post successful' });
//   } catch (error) {
//     res.status(500).send(error.message)
//   }
// }


export const deleteReportedPost = async (res, req, next) => {
  const { id } = req.params
  try {
    const reportedPost = await reportedPostModel.findById({ _id: id })
    if (!reportedPost) {
      res.send({ 'status': '400', 'message': 'Delete reported post not found' })
    }
    await reportedPostModel.findByIdAndDelete({ _id: id })
    res.send({ 'status': '200', 'message': 'Delete reported post successful' });
  } catch (error) {
    res.status(500).send(error.message)
  }
}

