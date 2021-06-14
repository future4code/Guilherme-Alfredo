import { user } from "../model/user";
import { connection } from "./connection";



export const insertUser = async (
    user: user
) => {
    await connection.insert(user).into('User_Arq')
}

