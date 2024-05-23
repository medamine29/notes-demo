import { Router } from 'express'
import {
  addNote,
  deleteNote,
  getArchivedNotes,
  getNoteById,
  getNotes,
  updateNote
} from '../controllers/note.controller'
import { catchMiddleware } from '../middlewares/catch.middleware'
import validate from '../middlewares/validation.middleware'
import { addNoteSchema, deleteNoteSchema, getNoteByIdSchema, updateNoteSchema } from '../validations/note.validation'

const router = Router()

router.post(
  '/',
  validate(addNoteSchema),
  catchMiddleware(addNote)
)

router.get(
  '/',
  catchMiddleware(getNotes)
)

router.get(
  '/archived',
  catchMiddleware(getArchivedNotes)
)

router.get(
  '/',
  validate(getNoteByIdSchema),
  catchMiddleware(getNoteById)
)

router.delete(
  '/:noteId',
  validate(deleteNoteSchema),
  catchMiddleware(deleteNote)
)

router.put(
  '/:noteId',
  validate(updateNoteSchema),
  catchMiddleware(updateNote)
)

export { router as noteRouter }
