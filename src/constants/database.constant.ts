import { SchemaOptions } from 'mongoose'

const ModelName = {
  NOTE: {
    model: 'Note',
    collection: 'notes'
  }
}

export const defaultSchemaOptions: SchemaOptions = {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  },
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      delete ret.__v
    },
  },
  toObject: {
    virtuals: true,
    transform: (doc, ret) => {
      delete ret.__v
    },
  },
}

export const {
  NOTE
} = ModelName
