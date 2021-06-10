import { Request, Response } from "express";
import createUsers from "../data/createUsers";
import { generateToken } from "../services/authenticator";
import { createHash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";


const signUp = async (req: Request, res: Response) => {
    try {
        
        const id = generateId()

        const {name, email, password} = req.body

        const hashPassword = createHash(password)

        if(!name) {
            throw new Error ("You must specify an name")
        }
        if(!email) {
            throw new Error ("You must specify an email")
        }

        if(!email.includes("@")){
            throw new Error ("Invalid email")
        }

        if(!password) {
            throw new Error ("You must specify an password")
        }

        if(password.length < 6 ) {
            throw new Error ("Your password must contain min 6 characters")
        }

        await createUsers(id, name, email, hashPassword)

        const token: string = generateToken({id})

        res.status(200).send({token})

    } catch (error) {
        res.status(400).send({message: error.message})
    }
}


export default signUp;