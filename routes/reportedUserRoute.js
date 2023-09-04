import express from 'express'
import {
  createReportedUser,
  getAllReportedUser,
  getReportedUserById,
  deleteReportedUser,
} from '../controller/reportedUserController.js'

const router = express.Router()

router.post('', createReportedUser)

router.get('', getAllReportedUser)

router.get('/:id', getReportedUserById)

//router.patch('/:id', updateReportedUser)

router.delete('/:id', deleteReportedUser)

export default router