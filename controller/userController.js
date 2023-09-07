import userModel from '../model/userModel.js'

export const createUser = async (req, res, next) => {
  const user = new userModel(req.body)
  try {
    await user.save();
    res.send({ 'status': '200', 'message': 'Create user successful' });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export const getAllUser = async (req, res, next) => {
  try {
    const users = await userModel.find({})
    res.send(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export const getUserByID = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await userModel
      .findById({ _id: id })
      .populate('posts')
      //.populate('followers')
      //.populate('following')
      .populate('favoritesVocabulary')
      .populate('favoritesUnit')
      //.populate('testHistory')
      .populate('comments')
      .populate('commentReactions')
      .populate('votings')
    if (!user) {
      res.send({ 'status': '400', 'message': 'User not found' })
    }
    res.send(user);
  }
  catch (error) {
    res.status(500).send(error.message)
  }
}

export const updateUser = async (req, res, next) => {
  const { id } = req.params
  const {
    role,
    point,
    email,
    password,
    userName,
    avatar,
    bio,
    birthDay
  } = req.body
  try {
    const user = await userModel.findById({ _id: id })
    if (!user) {
      res.send({ 'status': '400', 'message': 'Update user not found' })
    }
    await userModel.findByIdAndUpdate({ _id: id }, {
      role,
      point,
      email,
      password,
      userName,
      avatar,
      bio,
      birthDay,
    })
    res.send({ 'status': '200', 'message': 'Update user successful' });
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const deleteUser = async (req, res, next) => {
  const { id } = req.params
  try {
    const user = await userModel.findById({ _id: id })
    if (!user) {
      res.send({ 'status': '400', 'message': 'Delete user not found' })
    }
    await userModel.findByIdAndDelete({ _id: id })
    res.send({ 'status': '200', 'message': 'Delete user successful' });
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const addPost = async (req, res, next) => {
  const { id } = req.params
  const { posts } = req.body
  try {
    const user = await userModel.findById({ _id: id })
    if (!user) {
      res.send({ 'status': '400', 'message': 'Update user not found' })
    }
    await userModel.findByIdAndUpdate({ _id: id }, { $push: { posts } })
    res.send({ 'status': '200', 'message': 'Update user sucessful' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const removePost = async (req, res, next) => {
}

export const addFollower = async (req, res, next) => {
  const { id } = req.params
  const { followers } = req.body
  try {
    const user = await userModel.findById({ _id: id })
    if (!user) {
      res.send({ 'status': '400', 'message': 'Update user not found' })
    }
    await userModel.findByIdAndUpdate({ _id: id }, { $push: { followers } })
    res.send({ 'status': '200', 'message': 'Update user sucessful' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const removeFollower = async (req, res, next) => {
}

export const addFollowing = async (req, res, next) => {
  const { id } = req.params
  const { following } = req.body
  try {
    const user = await userModel.findById({ _id: id })
    if (!user) {
      res.send({ 'status': '400', 'message': 'Update user not found' })
    }
    await userModel.findByIdAndUpdate({ _id: id }, { $push: { following } })
    res.send({ 'status': '200', 'message': 'Update user sucessful' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const removeFollowing = async (req, res, next) => {
}

export const addFavoriteVoca = async (req, res, next) => {
  const { id } = req.params
  const { favoritesVocabulary } = req.body
  try {
    const user = await userModel.findById({ _id: id })
    if (!user) {
      res.send({ 'status': '400', 'message': 'Update user not found' })
    }
    await userModel.findByIdAndUpdate({ _id: id }, { $push: { favoritesVocabulary } })
    console.log(favoritesVocabulary)
    res.send({ 'status': '200', 'message': 'Update user sucessful' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const removeFavoriteVoca = async (req, res, next) => {
}

export const addFavoriteUnit = async (req, res, next) => {
  const { id } = req.params
  const { favoritesUnit } = req.body
  try {
    const user = await userModel.findById({ _id: id })
    if (!user) {
      res.send({ 'status': '400', 'message': 'Update user not found' })
    }
    await userModel.findByIdAndUpdate({ _id: id }, { $push: { favoritesUnit } })
    console.log(favoritesUnit)
    res.send({ 'status': '200', 'message': 'Update user sucessful' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const removeFavoriteUnit = async (req, res, next) => {
}

export const addTestHistory = async (req, res, next) => {
  const { id } = req.params
  const { testHistory } = req.body
  try {
    const user = await userModel.findById({ _id: id })
    if (!user) {
      res.send({ 'status': '400', 'message': 'Update user not found' })
    }
    await userModel.findByIdAndUpdate({ _id: id }, { $push: { testHistory } })
    res.send({ 'status': '200', 'message': 'Update user sucessful' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const removeTestHistory = async (req, res, next) => {
}

export const addComment = async (req, res, next) => {
  const { id } = req.params
  const { comments } = req.body
  try {
    const user = await userModel.findById({ _id: id })
    if (!user) {
      res.send({ 'status': '400', 'message': 'Update user not found' })
    }
    await userModel.findByIdAndUpdate({ _id: id }, { $push: { comments } })
    res.send({ 'status': '200', 'message': 'Update user sucessful' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const removeComment = async (req, res, next) => {
}

export const addCommentReaction = async (req, res, next) => {
  const { id } = req.params
  const { commentReactions } = req.body
  try {
    const user = await userModel.findById({ _id: id })
    if (!user) {
      res.send({ 'status': '400', 'message': 'Update user not found' })
    }
    await userModel.findByIdAndUpdate({ _id: id }, { $push: { commentReactions } })
    res.send({ 'status': '200', 'message': 'Update user sucessful' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const removeCommentReaction = async (req, res, next) => {
}

export const addVoting = async (req, res, next) => {
  const { id } = req.params
  const { votings } = req.body
  try {
    const user = await userModel.findById({ _id: id })
    if (!user) {
      res.send({ 'status': '400', 'message': 'Update user not found' })
    }
    await userModel.findByIdAndUpdate({ _id: id }, { $push: { votings } })
    res.send({ 'status': '200', 'message': 'Update user sucessful' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const removeVoting = async (req, res, next) => {
}

