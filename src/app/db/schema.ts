import { int, sqliteTable } from 'drizzle-orm/sqlite-core'

export const table = sqliteTable('my_table', {
  id: int('id').primaryKey(),
})
