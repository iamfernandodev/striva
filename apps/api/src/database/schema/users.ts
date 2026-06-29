import { pgTable, text, timestamp, boolean } from 'drizzle-orm/pg-core'
import { randomUUIDv7 } from 'bun'

export const users = pgTable('users', {
    id: text('id')
        .primaryKey()
        .$defaultFn(() => randomUUIDv7()),
    name: text('name').notNull(),
    email: text('email').notNull().unique(),
    emailVerified: boolean('email_verified').default(false).notNull(),
    image: text('image'),
    createdAt: timestamp('created_at').notNull(),
    updatedAt: timestamp('updated_at')
        .$onUpdate(() => new Date())
        .notNull(),
})
