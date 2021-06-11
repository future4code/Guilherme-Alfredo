import { Request, Response } from "express";
import getData from "../data/getData";
import userById from "../data/userById";

export default async function getUserById(req: Request, res: Response): Promise <void> {
    try {

        const token = req.headers.authorization as string

        const id = req.params.id

        if(!token){
            throw new Error("You are not authorized to perform this action.")
        }

        const authenticationData = getData(token)

        const user = await userById(id)

        res.status(200).send({
            id: user.id,
            name: user.name,
            email: user.email
        })

    } catch (error) {

        let errorMessage = error.message

        if(error.message.includes("undefined")) {

            errorMessage = "This user doesn't exist"
        }
        res.status(400).send({message: errorMessage})
    }
}

