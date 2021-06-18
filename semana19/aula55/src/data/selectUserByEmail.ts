import { user } from "../model/user";
import { connection } from "./connection";


export const selectUserByEmail = async (
    email: string
): Promise<user> => {
    try {
        const selectResult = await connection("User_Arq")
            .select("*")
            .where({email})

        const result = selectResult[0]

        return {
            id: result.id,
            name: result.name,
            email: result.email,
            password: result.password,
            role: result.role
        }
    } catch (error) {
        throw new Error(error.slqMessage || error.message)
    }
}