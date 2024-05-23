import { FilterQuery, ProjectionType, Types } from 'mongoose'
import NotFoundError from '../errors/not-found.error'
import { INote, IWriteNote } from '../models/note.model'
import NoteRepository from '../repositories/note.repository'
import BadRequestError from '../errors/bad-request.error'
import { DB_ERRORS, NOTE_ERRORS } from '../constants/errors.constant'
import { formatDate } from "../helpers/date.helper"

class NoteService {
  private readonly noteRepository = NoteRepository

  async createNote(noteData: IWriteNote) {
    const note = await this.noteRepository.create(noteData)
    return note
  }

  async getNotes() {
    const notes = await this.noteRepository.find({ isArchived: { $ne: true } }, {}, { lean: true })

    const formattedNotes = notes.map(noteElem => {
      const newNote = {
        ...noteElem,
        createdAt: formatDate(noteElem.createdAt.toISOString())
      }

      return newNote
    })

    return formattedNotes
  }

  async getArchivedNotes() {
    let notes = await this.noteRepository.find({ isArchived: true }, {}, { lean: true })
    
    const formattedNotes = notes.map(noteElem => {
      const newNote = {
        ...noteElem,
        createdAt: formatDate(noteElem.createdAt.toISOString())
      }

      return newNote
    })

    return formattedNotes
  }

  async getNoteById(noteId: Types.ObjectId) {
    const note = await this.noteRepository.findOne({ _id: noteId }, {}, { lean: true })
    if (!note) throw new NotFoundError(NOTE_ERRORS.NOTE_NOT_FOUND)

    return note
  }

  async deleteNote(actId: string) {
    const { acknowledged, modifiedCount } = await this.noteRepository.updateOne({ _id: actId }, { isArchived: true }, { lean: true })
    if (!acknowledged || !modifiedCount) throw new BadRequestError(DB_ERRORS.UPDATE_ERROR)
  }

  async updateNote(actId: string, noteData: IWriteNote) {
    const { acknowledged, modifiedCount } = await this.noteRepository.updateOne({ _id: actId }, noteData, { lean: true })
    if (!acknowledged || !modifiedCount) throw new BadRequestError(DB_ERRORS.UPDATE_ERROR)
  }

}

export default new NoteService()
