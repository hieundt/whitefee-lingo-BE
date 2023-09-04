import express from 'express'
import {
  createCommentReaction,
  getAllCommentReaction,
  getCommentReactionById,
  updateCommentReaction,
  deleteCommentReaction,
} from '../controller/commentReactionController.js'

const router = express.Router()

router.post('', createCommentReaction)

router.get('', getAllCommentReaction)

router.get('/:id', getCommentReactionById)

router.patch('/:id', updateCommentReaction)

router.delete('/:id', deleteCommentReaction)

export default router