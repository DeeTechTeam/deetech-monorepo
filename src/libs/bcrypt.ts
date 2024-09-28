import { hash } from "bcrypt"

export async function Hash(text: string) {
    return await hash(text, 10);
}