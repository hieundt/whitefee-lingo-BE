import express from 'express'
import {
  createToeicTest,
  getAllToeicTest,
  getToeicTestById,
  updateToeicTest,
  deleteToeicTest,
  addToeicTestQuestion,
  removeToeicTestQuestion,
} from '../controller/toeicTestController.js'

const router = express.Router()

router.post('', createToeicTest)

router.get('', getAllToeicTest)

router.get('/:id', getToeicTestById)

router.patch('/:id', updateToeicTest)

router.delete('/:id', deleteToeicTest)

router.patch('/addQuestion/:id', addToeicTestQuestion)

//router.patch('/removeVoca/:id', removeUnitVoca)

export default router