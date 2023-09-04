import express from 'express'
import {
  createVoting,
  getAllVoting,
  getVotingById,
  updateVoting,
  deleteVoting,
} from '../controller/votingController.js'

const router = express.Router()

router.post('', createVoting)

router.get('', getAllVoting)

router.get('/:id', getVotingById)

router.patch('/:id', updateVoting)

router.delete('/:id', deleteVoting)

export default router