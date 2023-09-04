import express from 'express'
import {
  createComment,
  getAllComment,
  getCommentById,
  updateComment,
  deleteComment,
  addCommentReaction,
  removeCommentReaction,
} from '../controller/commentController.js'

const router = express.Router()

router.post('', createComment)

router.get('', getAllComment)

router.get('/:id', getCommentById)

router.patch('/:id', updateComment)

router.delete('/:id', deleteComment)

router.patch('/addReaction/:id', addCommentReaction)

router.patch('/removeReaction/:id', removeCommentReaction)

export default router