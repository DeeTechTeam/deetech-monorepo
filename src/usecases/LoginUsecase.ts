import { compare } from "bcrypt";
import { UserModel } from "../domains";
import { UserRepository } from "../repositories";
import { response } from "../libs";
import { Context } from "hono";
import { sign } from "hono/jwt";

export default async function LoginUsecase(c: Context, data: UserModel.Login) {
    try {
        const user = await UserRepository.FindByEmail(data.email)
        const passwordIsMatch = await compare(data.password, user?.password as string)

        if (!user || !passwordIsMatch) {
            return response(c, 401, { message: "Email or password is incorrect" })
        }

        const payload = {
            user,
            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24
        }
        const token = await sign(payload, process.env.JWT_SECRET as string)

        return response(c, 200, "Login successfully", { token })
    } catch (error:any) {
        console.log({error})
        return response(c, 500, null,{ message: error.message })

    }

}