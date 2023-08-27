import express from 'express'
import {
  createVocabulary,
  getAllVocabulary,
  getVocabularyById,
  updateVocabulary,
  deleteVocabulary,
} from '../controller/vocabularyController.js'

const router = express.Router()

router.post('', createVocabulary)

router.get('', getAllVocabulary)

router.get('/:id', getVocabularyById)

router.patch('/:id', updateVocabulary)

router.delete('/:id', deleteVocabulary)

export default router