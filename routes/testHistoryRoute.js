import express from 'express'
import {
  createTestHistory,
  getAllTestHistory,
  getTestHistoryById,
  updateTestHistory,
  deleteTestHistory,
} from '../controller/testHistoryController.js'

const router = express.Router()

router.post('', createTestHistory)

router.get('', getAllTestHistory)

router.get('/:id', getTestHistoryById)

router.patch('/:id', updateTestHistory)

router.delete('/:id', deleteTestHistory)

export default router