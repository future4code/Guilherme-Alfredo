import { Request, Response } from "express";
import getData from "../data/getData";
import recipeById from "../data/recipeById";


export default async function getRecipesById(req: Request, res: Response): Promise <void> {
    try {
        
        const token = req.headers.authorization as string
        const id = req.params.id


        if(!token){
            throw new Error("You are not authorized to perform this action.")
        }

        const authenticationData = getData(token)

        const recipe = await recipeById(id)

        const date = new Date(recipe.createAt).toISOString()
        const splitDate = date.split("T")
        const splittedDate = splitDate[0].split("-")
        const correctedDate = `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`
        console.log(correctedDate)

        res.status(200).send({
            id: recipe.id,
            title: recipe.title,
            description: recipe.description,
            createAt: correctedDate
        }
            
        )

    } catch (error) {
        res.status(400).send({message: error. message})
        
    }
}