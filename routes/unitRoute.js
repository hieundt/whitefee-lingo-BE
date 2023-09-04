import express from 'express'
import {
  createUnit,
  getAllUnit,
  getUnitById,
  updateUnit,
  deleteUnit,
  addUnitVoca,
  removeUnitVoca,
} from '../controller/unitController.js'

const router = express.Router()

router.post('', createUnit)

router.get('', getAllUnit)

router.get('/:id', getUnitById)

router.patch('/:id', updateUnit)

router.patch('/addVoca/:id', addUnitVoca)

//router.patch('/removeVoca/:id', removeUnitVoca)

router.delete('/:id', deleteUnit)

export default router