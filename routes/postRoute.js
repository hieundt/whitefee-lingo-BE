import express from 'express'
import {
  createPost,
  getAllPost,
  getPostById,
  updatePost,
  deletePost,
  addPostComment,
  removePostComment,
  addPostVoting,
  removePostVoting,
  // addPostReport,
  // removePostReport,
} from '../controller/postController.js'

const router = express.Router()

router.post('', createPost)

router.get('', getAllPost)

router.get('/:id', getPostById)

router.patch('/:id', updatePost)

router.delete('/:id', deletePost)

router.patch('/addComment/:id', addPostComment)

router.patch('/removeComment/:id', removePostComment)

router.patch('/addVoting/:id', addPostVoting)

router.patch('/removeVoting/:id', removePostVoting)

// router.patch('/addReport/:id', addPostReport)

// router.patch('/removeReport/:id', removePostReport)

export default router