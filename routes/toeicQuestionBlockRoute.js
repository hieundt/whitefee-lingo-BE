import express from 'express'
import {
  createToeicQuestionBlock,
  getAllToeicQuestionBlock,
  getToeicQuestionBlockById,
  updateToeicQuestionBlock,
  deleteToeicQuestionBlock,
  addToeicQuestionBlockOption
} from '../controller/toeicQuestionBlockController.js'

const router = express.Router()

router.post('', createToeicQuestionBlock)

router.get('', getAllToeicQuestionBlock)

router.get('/:id', getToeicQuestionBlockById)

router.patch('/:id', updateToeicQuestionBlock)

router.delete('/:id', deleteToeicQuestionBlock)

router.patch('/addOption/:id', addToeicQuestionBlockOption)

export default router