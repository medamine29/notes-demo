import express, { Request, Response } from 'express'
import { catchMiddleware } from '../middlewares/catch.middleware'
import { noteRouter } from './note.routes'

export const router = express.Router()

router.use('/notes', noteRouter)

router.get(
  '/health',
  catchMiddleware((req: Request, res: Response) => {
    return res.json({ status: 'ok' })
  })
)