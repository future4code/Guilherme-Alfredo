import { Request, Response } from "express";
import getUserByEmail from "../data/userByEmail";
import { generateToken } from "../services/authenticator";
import { compareHash } from "../services/hashManager";



export default async function login(req: Request, res: Response): Promise<void> {
    try {
        
        const {email, password} = req.body

        if (!email) {
            throw new Error ("You must enter an email")
        }

        if(!email.includes("@")){
            throw new Error("Invalid email")
        }

        if (!password) {
            throw new Error ("You must enter an password")
        }

        const user = await getUserByEmail(email)

        if (!user) {
            throw new Error ("This user doesn`t exist")
        }

        const correctPassword : boolean = compareHash(password, user.password)

        if (!correctPassword) {
            throw new Error ("Incorrect password")
        }

        const token = generateToken({id: user.id})

        res.status(200).send({token})


    } catch (error) {
        res.status(400).send({message: error.message})
    }
}













