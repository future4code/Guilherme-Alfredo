import { hash } from "../services/hashManager"
import { user } from "../model/user"
import { generateToken } from "../services/authenticator"
import { generateId } from "../services/idGenerator";
import { response } from "express";
import { insertUser } from "../data/user/insertUser";


export const signupBusiness = async (
    user: user
):Promise<string> => {

    if (!user.name || !user.email || !user.password) {
        response.statusCode = 406  
        throw new Error('"name", "email" and "password" must be provided')
    }

    const id: string = generateId()
    const cypherPassword = await hash(user.password);

    const newUser: user = {
        ...user,
        password: cypherPassword,
        id: id
    }
    
    await insertUser(newUser)
    

    const token: string = generateToken({ id: newUser.id })

    return token

}
