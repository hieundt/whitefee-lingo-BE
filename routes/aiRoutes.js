import express from 'express'
import { gptModel } from '../controller/aiController.js'

const router = express.Router()

router.get('/GPT', gptModel)



export default router