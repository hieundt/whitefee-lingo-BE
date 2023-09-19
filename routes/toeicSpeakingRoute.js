import express from 'express'

import {
  // Speaking
  createToeicSpeaking,
  getAllToeicSpeaking,
  getToeicSpeakingById,
  updateToeicSpeaking,
  deleteToeicSpeaking,
  addToeicSpeakingResponse,
  removeToeicSpeakingResponse,

} from '../controller/toeicSpeakingController.js'

const router = express.Router()

// Listening
router.post('', createToeicSpeaking)

router.get('', getAllToeicSpeaking)

router.get('/:id', getToeicSpeakingById)

router.patch('/:id', updateToeicSpeaking)

router.patch('/addResponse/:id', addToeicSpeakingResponse)

//router.patch('/removeVoca/:id', removeUnitVoca)

router.delete('/:id', deleteToeicSpeaking)

export default router