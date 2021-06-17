import { response } from "express";
import { user } from "../../model/user";
import { connection } from "../connection";



export const selectUserByEmail = async (
    email: string
): Promise<user> => {
    try {
        const queryResult = await connection("labook_users")
        .select("*")
        .where({ email })

        if (!queryResult[0]) {
            response.statusCode = 401
            throw new Error("Invalid credentials")
        }
        const user: user = {
            id: queryResult[0].id,
            name: queryResult[0].name,
            email: queryResult[0].email,
            password: queryResult[0].password
        }

    return user

    } catch (error) {
        throw new Error(error.slqMessage || error.message)
    }
}