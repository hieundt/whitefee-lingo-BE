import express from 'express'
import {
  createUser,
  getAllUser,
  getUserByID,
  updateUser,
  deleteUser,
  addPost,
  removePost,
  addFollower,
  removeFollower,
  addFollowing,
  removeFollowing,
  addFavoriteVoca,
  removeFavoriteVoca,
  addFavoriteUnit,
  removeFavoriteUnit,
  addTestHistory,
  removeTestHistory,
  addComment,
  removeComment,
  addCommentReaction,
  removeCommentReaction,
  addVoting,
  removeVoting,
} from '../controller/userController.js'

const router = express.Router()

router.post('', createUser)

router.get('', getAllUser)

router.get('/:id', getUserByID)

router.patch('/:id', updateUser)

router.delete('/:id', deleteUser)

router.patch('/addPost/:id', addPost)

// router.patch('/remove/:id', remove)

router.patch('/addFollower/:id', addFollower)

// router.patch('/remove/:id', remove)

router.patch('/addFollowing/:id', addFollowing)

// router.patch('/remove/:id', remove)

router.patch('/addFavoriteVoca/:id', addFavoriteVoca)

// router.patch('/remove/:id', remove)

router.patch('/addFavoriteUnit/:id', addFavoriteUnit)

// router.patch('/remove/:id', remove)

router.patch('/addTestHistory/:id', addTestHistory)

// router.patch('/remove/:id', remove)

router.patch('/addComment/:id', addComment)

// router.patch('/remove/:id', remove)

router.patch('/addReaction/:id', addCommentReaction)

// router.patch('/remove/:id', remove)

router.patch('/addVoting/:id', addVoting)

// router.patch('/remove/:id', remove)

export default router
