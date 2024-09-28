import { Context } from "hono";
import { UserModel } from "../domains";
import { response } from "../libs";
import { UserRepository } from "../repositories";
import { bcrypt } from "../libs";

export default async function RegisterUsecase(c: Context, data: UserModel.Register) {

    try {
        const userIsExist = await UserRepository.FindByEmail(data.email);

        if(userIsExist){
            return response(c, 400,null,{email:"Email already exist"});
        }

        data.password = await bcrypt.Hash(data.password);
        
        await UserRepository.Store(data);
        return response(c, 200, "User registered successfully", null);
    } catch (error) {
        return response(c, 500, null ,error);
    }
}