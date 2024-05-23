import { Request, Response } from 'express'
import NoteService from '../services/note.service'

export const addNote = async (req: Request, res: Response) => {
  const [note] = await NoteService.createNote(req.validBody)
  return res.json(note)
}

export const getNotes = async (req: Request, res: Response) => {
  const notes = await NoteService.getNotes()
  return res.json(notes)
}

export const getArchivedNotes = async (req: Request, res: Response) => {
  const notes = await NoteService.getArchivedNotes()
  return res.json(notes)
}

export const deleteNote = async (req: Request, res: Response) => {
  const { noteId } = req.validParams
  await NoteService.deleteNote(noteId)
  res.sendStatus(204)
}

export const getNoteById = async (req: Request, res: Response) => {
  const { noteId } = req.validParams
  const act = await NoteService.getNoteById(noteId)
  return res.json(act)
} 

export const updateNote = async (req: Request, res: Response) => {
  const { noteId } = req.validParams
  await NoteService.updateNote(noteId, req.validBody)
  res.sendStatus(204)
}