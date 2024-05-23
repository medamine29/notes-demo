const ERRORS = {
  DB_ERRORS: {
    UPDATE_ERROR: {
      code: 'update_error',
      message: 'Error when updating'
    }
  },
  SERVER_ERRORS: {
    INTERNAL_SERVER_ERROR: {
      code: 'internal_server_error',
      message: 'Internal server error'
    },
  },
  NOTE_ERRORS: {
    NOTE_NOT_FOUND: {
      code: 'note_not_found',
      message: "note not found"
    },
  }
}

export const {
  DB_ERRORS,
  SERVER_ERRORS,
  NOTE_ERRORS
} = ERRORS
