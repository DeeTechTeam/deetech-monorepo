import { Prisma } from "@prisma/client";
import { ApplicationModel } from "../domains";
import { prisma } from "../libs";


export async function Store(data: Prisma.ApplicationCreateInput): Promise<ApplicationModel.ApplicationModel> {
    return await prisma.application.create({
        data: data
    })
}

export async function Update(id: string, data: Prisma.ApplicationUpdateInput): Promise<ApplicationModel.ApplicationModel> {
    return await prisma.application.update({
        where: { id: id },
        data: data
    })
}

export async function Delete(id: string): Promise<ApplicationModel.ApplicationModel> {
    return await prisma.application.delete({
        where: { id: id }
    })
}

export async function FindOne(id: string): Promise<ApplicationModel.ApplicationModel> {
    return await prisma.application.findUnique({
        where: { id: id }
    })
}

export async function FindAll(): Promise<ApplicationModel.ApplicationModel[]> {
    return await prisma.application.findMany()
}

