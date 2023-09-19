import express from 'express'
import {
  createToeicSpeakingResponse,
  getAllToeicSpeakingResponse,
  getToeicSpeakingResponseById,
  updateToeicSpeakingResponse,
  deleteToeicSpeakingResponse,
} from '../controller/toeicSpeakingResponseController.js'

const router = express.Router()

router.post('', createToeicSpeakingResponse)

router.get('', getAllToeicSpeakingResponse)

router.get('/:id', getToeicSpeakingResponseById)

router.patch('/:id', updateToeicSpeakingResponse)

router.delete('/:id', deleteToeicSpeakingResponse)

export default router