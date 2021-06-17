import { Request, Response } from "express";
import { signupBusiness } from "../../business/user/signupBusiness";
import { generateId } from "../../services/idGenerator";



export const signup = async (
    req: Request,
    res: Response
) => {
    try {
        let message = "Success!"
        const { name, email, password } = req.body
        const id = generateId()

        const token: string = await signupBusiness({
            id, name, email, password
        })

        res
            .status(201)
            .send({ message, token })

    } catch (error) {

        res.statusCode = 400
        let message = error.sqlMessage || error.message

        res.send({ message })
    }
}

