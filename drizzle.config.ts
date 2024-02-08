// import * as dotenv from "dotenv"
import type { Config } from 'drizzle-kit'

// bug in drizzle: see https://github.com/drizzle-team/drizzle-orm/issues/1228
import { env } from '@/app/lib/env'

// dotenv.config({ path: ".env" })
console.log('\n\nprocess.env =>', env.DATABASE_URL, '\n\n')

export default {
  schema: './src/app/db/schema.ts',
  out: './src/app/db/migrations',
  driver: 'better-sqlite',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  verbose: true,
} satisfies Config
