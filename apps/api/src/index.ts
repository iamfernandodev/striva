import { env } from 'bun'
import { Elysia } from 'elysia'

const port = env.PORT as string

new Elysia()
    .listen(port)

console.log(`Server running 🦊`)