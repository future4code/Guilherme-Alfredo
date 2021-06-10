import { Request, Response } from "express";
import getData from "../data/getData";
import userById from "../data/userById";


export default async function getUser(req: Request, res: Response): Promise<void> {
    try {

        const token = req.headers.authorization as string

        const authenticationData = getData(token)

        const user = await userById(authenticationData.id)

        res.status(200).send({
            id: user.id,
            name: user.name,
            email: user.email
        })

    } catch (error) {
        res.status(400).send({message: error.message})
    }
}