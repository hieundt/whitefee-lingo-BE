import express from 'express'
import {
  createMod,
  getAllMod,
  getModById,
  deleteMod,
  addPendingPost,
  //removePendingPost,
  addReportedUser,
  //removeReportedUser,
  addReportedPost,
  //removeReportedPost,
} from '../controller/modController.js'

const router = express.Router()

router.post('', createMod)

router.get('', getAllMod)

router.get('/:id', getModById)

router.delete('/:id', deleteMod)

router.patch('/addPendingPost/:id', addPendingPost)

router.patch('/addReportedUser/:id', addReportedUser)

router.patch('addReportedPost/:id', addReportedPost)

export default router