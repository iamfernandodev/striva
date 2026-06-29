import { relations } from 'drizzle-orm'
import { users } from './src/database/schema/users'
import { accounts } from './src/database/schema/accounts'
import { sessions } from './src/database/schema/sessions'

export const usersRelations = relations(users, ({ many }) => ({
    sessions: many(sessions),
    accounts: many(accounts),
}))

export const sessionsRelations = relations(sessions, ({ one }) => ({
    users: one(users, {
        fields: [sessions.userId],
        references: [users.id],
    }),
}))

export const accountsRelations = relations(accounts, ({ one }) => ({
    users: one(users, {
        fields: [accounts.userId],
        references: [users.id],
    }),
}))
