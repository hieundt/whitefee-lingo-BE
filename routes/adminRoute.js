import express from 'express'
import {
  createAdmin,
  getAllAdmin,
  getAdminById,
  deleteAdmin,
} from '../controller/adminController.js'

const router = express.Router()

router.post('', createAdmin)

router.get('', getAllAdmin)

router.get('/:id', getAdminById)

router.delete('/:id', deleteAdmin)

export default router