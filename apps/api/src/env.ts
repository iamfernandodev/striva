import { z } from 'zod'

const envSchema = z.object({
    PORT: z.string(),
    NODE_ENV: z.string(),
    ALLOWED_ORIGINS: z.string(),
    JWT_SECRET: z.string(),

    DATABASE_URL: z.url().startsWith('postgresql://'),
    DATABASE_PORT: z.string(),
    DATABASE_NAME: z.string(),
    DATABASE_USERNAME: z.string(),
    DATABASE_PASSWORD: z.string(),

    BETTER_AUTH_SECRET: z.string(),
    BETTER_AUTH_URL: z.string(),
})

export const env = envSchema.parse(Bun.env)
