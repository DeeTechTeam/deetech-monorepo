import { z } from "zod";

export const User = z.object({
    id: z.string(),
    name: z.string().min(3).max(100),
    email: z.string().email().max(100),
    password: z.string().min(6).max(100),
    created_at: z.date(),
    updated_at: z.date(),
})

export type User = z.infer<typeof User>

export const Register = User.pick({
    name: true,
    email: true,
    password: true,
})

export type Register = z.infer<typeof Register>

export const Login = User.pick({
    email: true,
    password: true,
})

export type Login = z.infer<typeof Login>


