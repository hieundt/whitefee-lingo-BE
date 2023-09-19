import express from 'express'
import {
  createToeicWritingResponse,
  getAllToeicWritingResponse,
  getToeicWritingResponseById,
  updateToeicWritingResponse,
  deleteToeicWritingResponse,
} from '../controller/toeicWritingResponseController.js'

const router = express.Router()

router.post('', createToeicWritingResponse)

router.get('', getAllToeicWritingResponse)

router.get('/:id', getToeicWritingResponseById)

router.patch('/:id', updateToeicWritingResponse)

router.delete('/:id', deleteToeicWritingResponse)

export default router