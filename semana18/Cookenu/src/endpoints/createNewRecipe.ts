import { Request, Response } from "express";
import createRecipes from "../data/createRecipes";
import getData from "../data/getData";
import userById from "../data/userById";
import { generateId } from "../services/idGenerator";


const createNewRecipe = async (req: Request, res: Response) => {
    try {
        
        const token = req.headers.authorization as string
        const authenticationData = getData(token)

        if(!token){
            throw new Error("You are not authorized to perform this action.")
        }


        const user = await userById(authenticationData.id)

        
        const id = generateId()

        const {title, description} = req.body

        if(!title) {
            throw new Error ("You must specify an title")
        }

        if(!description) {
            throw new Error ("You must specify an description")
        }

        const date = new Date
        const year: number = date.getFullYear()
        const month: number = date.getMonth() + 1
        const day: number = date.getDate()

        const createAt = `${year}-${month}-${day}`

        await createRecipes(id, title, description, createAt, user.id) 

        res.status(200).send({
            message: "Recipe created"
        })


    } catch (error) {
        res.status(400).send({message: error.message})
    }
}

export default createNewRecipe;