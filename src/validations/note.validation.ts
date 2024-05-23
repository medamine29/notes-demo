import Joi from 'joi'
import { RequestValidationSchemas } from '.'
import { isMongoId } from './helper.validation'

/**
 * POST /notes
 */
export const addNoteSchema: RequestValidationSchemas = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    content: Joi.string().required(),
    image: Joi.string(),
    tags: Joi.array(),
  })
}

/**
 * GET /notes/:noteId
 */
export const getNoteByIdSchema: RequestValidationSchemas = {
  params: Joi.object().keys({
    noteId: Joi.string().custom(isMongoId).required()
  })
}

/**
 * DELETE /notes/:noteId
 */
export const deleteNoteSchema: RequestValidationSchemas = {
  params: Joi.object().keys({
    noteId: Joi.string().custom(isMongoId).required()
  })
}

/**
 * PUT /notes/:noteId
 */
export const updateNoteSchema: RequestValidationSchemas = {
  params: Joi.object().keys({
    noteId: Joi.string().custom(isMongoId).required()
  }),
  body: Joi.object().keys({
    title: Joi.string(),
    content: Joi.string(),
    image: Joi.string(),
    tags: Joi.array(),
  })
}


