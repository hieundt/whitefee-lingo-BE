import express from 'express'
import {
  createUser,
  getAllUser,
  getUserByID,
  updateUser,
  deleteUser,
  addFavoriteVoca,
  addFavoriteUnit,
} from '../controller/userController.js'

const router = express.Router()

router.post('', createUser)

router.get('', getAllUser)

router.get('/:id', getUserByID)

router.patch('/:id', updateUser)

router.delete('/:id', deleteUser)

router.patch('/addFavoriteVoca/:id', addFavoriteVoca)

router.patch('/addFavoriteUnit/:id', addFavoriteUnit)

export default router
