import express from 'express'
import {
  createAdmin,
  getAllAdmin,
  getAdminById,
  deleteAdmin,
  addPendingPost,
  //removePendingPost,
  addReportedUser,
  //removeReportedUser,
  addReportedPost,
  //removeReportedPost,
} from '../controller/adminController.js'

const router = express.Router()

router.post('', createAdmin)

router.get('', getAllAdmin)

router.get('/:id', getAdminById)

router.delete('/:id', deleteAdmin)

router.patch('/addPendingPost/:id', addPendingPost)

router.patch('/addReportedUser/:id', addReportedUser)

router.patch('addReportedPost/:id', addReportedPost)

export default router