import { Request, Response } from "express";
import { deleteUserBusiness } from "../../business/deleteUserBusiness";


export const deleteUser = async ( req: Request, res: Response ) => {
    try {

        const id = req.params.id as string
        const token = req.headers.authorization as string

        await deleteUserBusiness(id, token)

        res 
            .status(201)
            .send({message: "deleted user"})
    

    } catch (error) {
        res.status(400).send(error.message)
    }
}