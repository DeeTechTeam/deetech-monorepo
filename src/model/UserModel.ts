import {t} from "elysia"

const User = t.Object({
    id: t.String().id().default(t.String()),
    email: t.String().unique(),
    name: t.String().optional(),
    password: t.String(),
    createdAt: t.Date().default(t.Date()),
    updatedAt: t.Date().updatedAt(),
    deletedAt: t.Date().optional(),
})

const login = t.Object({
    email: t.String(),
    password: t.String(),
})

export const UserModel = {

}