import postModel from '../model/postModel.js'

export const createPost = async (req, res, next) => {
  const post = new postModel(req.body)
  try {
    await post.save();
    res.send({ 'status': '200', 'message': 'Create post successful' });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export const getAllPost = async (req, res, next) => {
  try {
    const posts = await postModel.find();
    res.send(posts);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export const getPostById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const post = await postModel
      .findById({ _id: id })
      .populate('comments')
      .populate('voting')
    //.populate('reports') 
    if (!post) {
      res.send({ 'status': '400', 'message': 'Post not found' })
      return
    }
    res.send(post);
  }
  catch (error) {
    res.status(500).send(error.message)
  }
}

export const updatePost = async (req, res, next) => {
  const { id } = req.params
  const { description, point, postType } = req.body
  try {
    const post = await postModel.findById({ _id: id })
    if (!post) {
      res.send({ 'status': '400', 'message': 'Update post not found' })
      return
    }
    await postModel.findByIdAndUpdate({ _id: id }, { description, point, postType })
    res.send({ 'status': '200', 'message': 'Update post successful' });
  } catch (error) {
    res.status(500).send(error.message)
  }
}


export const deletePost = async (req, res, next) => {
  const { id } = req.params
  try {
    const post = await postModel.findById({ _id: id })
    if (!post) {
      res.send({ 'status': '400', 'message': 'Delete post not found' })
    }
    await postModel.findByIdAndDelete({ _id: id })
    res.send({ 'status': '200', 'message': 'Delete post successful' });
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const addPostComment = async (req, res, next) => {
  const { id } = req.params
  const { comments } = req.body
  try {
    const post = await postModel.findById({ _id: id })
    if (!post) {
      res.send({ 'status': '400', 'message': 'Update post not found' })
    }
    await postModel.findByIdAndUpdate({ _id: id }, { $push: { comments } })
    res.send({ 'status': '200', 'message': 'Update post sucessful' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const removePostComment = async (req, res, next) => {

}

export const addPostVoting = async (req, res, next) => {
  const { id } = req.params
  const { votings } = req.body
  try {
    const post = await postModel.findById({ _id: id })
    if (!post) {
      res.send({ 'status': '400', 'message': 'Update post not found' })
    }
    await postModel.findByIdAndUpdate({ _id: id }, { $push: { votings } })
    res.send({ 'status': '200', 'message': 'Update post sucessful' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const removePostVoting = async (req, res, next) => {

}

// export const addPostReport = async (req, res, next) => {
//   const { id } = req.params
//   const { reports } = req.body
//   try {
//     const post = await postModel.findById({ _id: id })
//     if (!post) {
//       res.send({ 'status': '400', 'message': 'Update post not found' })
//     }
//     await postModel.findByIdAndUpdate({ _id: id }, { $push: { reports } })
//     res.send({ 'status': '200', 'message': 'Update post sucessful' })
//   } catch (error) {
//     res.status(500).send(error.message)
//   }
// }

// export const removePostReport = async (req, res, next) => {

// }
