import { UserModel } from "../domains";
import { prisma } from "../libs";


export async function Store(data: UserModel.Register) {
    return await prisma.users.create({data});
}

export async function FindByEmail(email: string) {
    return await prisma.users.findFirst({where: {email}});
}