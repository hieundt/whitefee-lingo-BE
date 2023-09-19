import express from 'express'
import {
  createTest,
  getAllTest,
  getTestById,
  updateTest,
  deleteTest,
  addTestQuestion,
  //removeTestQuestion,
} from '../controller/testController.js'

const router = express.Router()

router.post('', createTest)

router.get('', getAllTest)

router.get('/:id', getTestById)

router.patch('/:id', updateTest)

router.delete('/:id', deleteTest)

router.patch('/addQuestion/:id', addTestQuestion)

//router.patch('/removeVoca/:id', removeUnitVoca)

export default router