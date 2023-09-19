import express from 'express'
import {
  createTestHasQuestion,
  getAllTestHasQuestion,
  getTestHasQuestionById,
  updateTestHasQuestion,
  deleteTestHasQuestion,
} from '../controller/testHasQuestionController.js'

const router = express.Router()

router.post('', createTestHasQuestion)

router.get('', getAllTestHasQuestion)

router.get('/:id', getTestHasQuestionById)

router.patch('/:id', updateTestHasQuestion)

router.delete('/:id', deleteTestHasQuestion)

export default router