import express from 'express'
import {
  createMod,
  getAllMod,
  getModById,
  deleteMod,
} from '../controller/modController.js'

const router = express.Router()

router.post('', createMod)

router.get('', getAllMod)

router.get('/:id', getModById)

router.delete('/:id', deleteMod)

export default router