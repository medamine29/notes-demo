/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { loadEnv } from '../helpers/load-env'

loadEnv()
const env = process.env as Record<string, string>

const Config = {
  SERVER: {
    DOMAIN: env.DOMAIN,
    ENV: env.NODE_ENV,
    PORT: env.PORT || 3000,
    TIMEZONE: env.TZ,
  },
  DEFAULT: {
  },
  DB: {
    CONNECTION_STRING: env.DB_CONNECTION_STRING,
  }
}

export const { SERVER, DEFAULT, DB } = Config
