import commentReactionModel from '../model/commentReactionModel.js'

export const createCommentReaction = async (req, res, next) => {
  const commentReaction = new commentReactionModel(req.body)
  try {
    await commentReaction.save();
    res.send({ 'status': '200', 'message': 'Create comment reaction successful' });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export const getAllCommentReaction = async (req, res, next) => {
  try {
    const commentReactions = await commentReactionModel.find({});
    res.send(commentReactions);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export const getCommentReactionById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const commentReaction = await commentReactionModel.findById({ _id: id })
    if (!commentReaction) {
      res.send({ 'status': '400', 'message': 'Comment reaction not found' })
      return
    }
    res.send(commentReaction);
  }
  catch (error) {
    res.status(500).send(error.message)
  }
}

export const updateCommentReaction = async (req, res, next) => {
  const { id } = req.params
  const { reaction } = req.body
  try {
    const commentReaction = await commentReactionModel.findById({ _id: id })
    if (!commentReaction) {
      res.send({ 'status': '400', 'message': 'Update comment reaction not found' })
      return
    }
    await commentReactionModel.findByIdAndUpdate({ _id: id }, { reaction })
    res.send({ 'status': '200', 'message': 'Update comment reaction successful' });
  } catch (error) {
    res.status(500).send(error.message)
  }
}


export const deleteCommentReaction = async (req, res, next) => {
  const { id } = req.params
  try {
    const commentReaction = await commentReactionModel.findById({ _id: id })
    if (!commentReaction) {
      res.send({ 'status': '400', 'message': 'Delete comment reaction not found' })
    }
    await commentReactionModel.findByIdAndDelete({ _id: id })
    res.send({ 'status': '200', 'message': 'Delete comment reaction successful' });
  } catch (error) {
    res.status(500).send(error.message)
  }
}

