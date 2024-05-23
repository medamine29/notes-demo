import { model, Schema, Types } from 'mongoose'
import {
  NOTE,
  defaultSchemaOptions,
} from '../constants/database.constant'

export interface INote {
  _id: Types.ObjectId,
  title: string,
  content: string,
  image: string,
  tags: [],
  isArchived: boolean,
  createdAt: Date,
  updatedAt: Date,
}

export interface IWriteNote {
  title: INote['title']
  content: INote['content']
  image: INote['image']
  tags: INote['tags']
  isArchived: INote['isArchived']
}

const noteSchema = new Schema<INote>(
  {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: false
    },
    tags: {
      type: [String],
      default: [],
      required: false
    },
    isArchived: {
      type: Boolean,
      default: false
    }
  },
  defaultSchemaOptions
)

export const Note = model<INote>(
  NOTE.model,
  noteSchema,
  NOTE.collection
)
