import { zValidator } from "@hono/zod-validator";
import { Context, Hono } from "hono";
import { UserModel } from "../domains";
import { RegisterUsecase } from "../usecases";

const app = new Hono()
.post('/register',zValidator("json", UserModel.Register) ,async(c: Context) => {
    const data = c.req.valid("json" as never)
    return await RegisterUsecase(c, data)
})