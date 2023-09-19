import express from 'express'

import {
  // Reading
  createToeicReading,
  getAllToeicReading,
  getToeicReadingById,
  updateToeicReading,
  deleteToeicReading,
  addToeicReadingQuestionBlock,
  removeToeicReadingQuestionBlock,

} from '../controller/toeicReadingController.js'

const router = express.Router()

// Listening
router.post('', createToeicReading)

router.get('', getAllToeicReading)

router.get('/:id', getToeicReadingById)

router.patch('/:id', updateToeicReading)

router.patch('/addQuestionBlock/:id', addToeicReadingQuestionBlock)

//router.patch('/removeVoca/:id', removeUnitVoca)

router.delete('/:id', deleteToeicReading)

export default router