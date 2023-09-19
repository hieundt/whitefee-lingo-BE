import commentModel from '../model/commentModel.js'

export const createComment = async (req, res, next) => {
  const comment = new commentModel(req.body)
  try {
    await comment.save();
    res.send({ 'status': '200', 'message': 'Create comment successful' });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export const getAllComment = async (req, res, next) => {
  try {
    const comments = await commentModel.find({});
    res.send(comments);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export const getCommentById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const comment = await commentModel
      .findById({ _id: id })
      .populate('reactions')
    if (!comment) {
      res.send({ 'status': '400', 'message': 'Comment not found' })
      return
    }
    res.send(comment);
  }
  catch (error) {
    res.status(500).send(error.message)
  }
}

export const updateComment = async (req, res, next) => {
  const { id } = req.params
  const { content } = req.body
  try {
    const comment = await commentModel.findById({ _id: id })
    if (!comment) {
      res.send({ 'status': '400', 'message': 'Update comment not found' })
      return
    }
    await commentModel.findByIdAndUpdate({ _id: id }, { content })
    res.send({ 'status': '200', 'message': 'Update comment successful' });
  } catch (error) {
    res.status(500).send(error.message)
  }
}


export const deleteComment = async (req, res, next) => {
  const { id } = req.params
  try {
    const comment = await commentModel.findById({ _id: id })
    if (!comment) {
      res.send({ 'status': '400', 'message': 'Delete comment not found' })
    }
    await commentModel.findByIdAndDelete({ _id: id })
    res.send({ 'status': '200', 'message': 'Delete comment successful' });
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const addCommentReaction = async (req, res, next) => {
  const { id } = req.params
  const { reactions } = req.body
  try {
    const comment = await commentModel.findById({ _id: id })
    if (!comment) {
      res.send({ 'status': '400', 'message': 'Update comment not found' })
    }
    await commentModel.findByIdAndUpdate({ _id: id }, { $push: { reactions } })
    res.send({ 'status': '200', 'message': 'Update comment sucessful' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const removeCommentReaction = async (req, res, next) => {
}

