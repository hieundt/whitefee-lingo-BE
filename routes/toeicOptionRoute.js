import express from 'express'
import {
  createToeicOption,
  getAllToeicOption,
  getToeicOptionById,
  updateToeicOption,
  deleteToeicOption,
} from '../controller/toeicOptionController.js'

const router = express.Router()

router.post('', createToeicOption)

router.get('', getAllToeicOption)

router.get('/:id', getToeicOptionById)

router.patch('/:id', updateToeicOption)

router.delete('/:id', deleteToeicOption)

export default router