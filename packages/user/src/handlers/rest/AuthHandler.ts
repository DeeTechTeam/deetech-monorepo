import { zValidator } from "@hono/zod-validator";
import { Context, Hono } from "hono";
import { UserModel } from "../../domains";
import { LoginUsecase, RegisterUsecase } from "../../usecases";

const AuthHandler = new Hono()

AuthHandler.post('/register',zValidator("json", UserModel.Register) ,async(c: Context) => {
    const data = c.req.valid("json" as never)
    return await RegisterUsecase(c, data)
})

AuthHandler.post('/login',zValidator("json", UserModel.Login) ,async(c: Context) => {
    const data = c.req.valid("json" as never)
    return await LoginUsecase(c, data)
})

export default AuthHandler