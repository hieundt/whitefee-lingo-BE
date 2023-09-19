import express from 'express'

import {
  // Writing
  createToeicWriting,
  getAllToeicWriting,
  getToeicWritingById,
  updateToeicWriting,
  deleteToeicWriting,
  addToeicWritingResponse,
  //removeToeicWritingResponse,
} from '../controller/toeicWritingController.js'

const router = express.Router()

// Listening
router.post('', createToeicWriting)

router.get('', getAllToeicWriting)

router.get('/:id', getToeicWritingById)

router.patch('/:id', updateToeicWriting)

router.patch('/addResponse/:id', addToeicWritingResponse)

//router.patch('/removeVoca/:id', removeUnitVoca)

router.delete('/:id', deleteToeicWriting)

export default router