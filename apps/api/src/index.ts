import { Elysia } from 'elysia'
import { cors } from '@elysiajs/cors'
import { openapi } from '@elysiajs/openapi'
import { betterAuthPlugin, OpenAPI } from './http/plugins/better-auth'

const app = new Elysia()
    .use(betterAuthPlugin)
    .use(
        openapi({
            documentation: {
                components: await OpenAPI.components,
                paths: await OpenAPI.getPaths(),
            },
        }),
    )
    .use(
        cors({
            origin: 'http://localhost:5173',
            credentials: true,
            allowedHeaders: ['Content-Type', 'Authorization'],
        }),
    )
    .listen(Bun.env.PORT ?? 3000)

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
)
