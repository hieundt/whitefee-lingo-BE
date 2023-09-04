import express from 'express'
import {
  createReportedPost,
  getAllReportedPost,
  getReportedPostById,
  deleteReportedPost,
} from '../controller/reportedPostController.js'

const router = express.Router()

router.post('', createReportedPost)

router.get('', getAllReportedPost)

router.get('/:id', getReportedPostById)

//router.patch('/:id', updateReportedPost)

router.delete('/:id', deleteReportedPost)

export default router