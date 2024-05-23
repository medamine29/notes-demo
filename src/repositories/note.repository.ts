import { INote, IWriteNote, Note } from '../models/note.model'
import BaseRepository from './base.repository'

class NoteRepository extends BaseRepository<INote, IWriteNote> {
  model = Note
}

export default new NoteRepository()
