import express from 'express'

import {
  // Listening
  createToeicListening,
  getAllToeicListening,
  getToeicListeningById,
  updateToeicListening,
  deleteToeicListening,
  addToeicListeningQuestionBlock,
  removeToeicListeningQuestionBlock,

} from '../controller/toeicListeningController.js'

const router = express.Router()

// Listening
router.post('', createToeicListening)

router.get('', getAllToeicListening)

router.get('/:id', getToeicListeningById)

router.patch('/:id', updateToeicListening)

router.patch('/addQuestionBlock/:id', addToeicListeningQuestionBlock)

//router.patch('/removeVoca/:id', removeUnitVoca)

router.delete('/:id', deleteToeicListening)

export default router