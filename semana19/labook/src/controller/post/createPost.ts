import { Request, Response } from "express";
import { createPostBusiness } from "../../business/post/createPostBusiness";
import { authenticationData } from "../../model/user";
import { getTokenData } from "../../services/authenticator";
import { generateId } from "../../services/idGenerator";



export const createPost = async (
    req: Request,
    res: Response
) => {
    try {
        
        let message = "Success!"

        const { photo, description, type, createdAt, authorId } = req.body
        const token: string = req.headers.authorization as string
        const tokenData: authenticationData = getTokenData(token)
        const id = generateId()

        await createPostBusiness({
            id, photo, description, type, createdAt, authorId
        })

        res.status(201).send({ message })
        
    } catch (error) {
    let message = error.sqlMessage || error.message
    res.statusCode = 400

    res.send({ message })
    }
}
