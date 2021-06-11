import connection from "../connection"


export default async function recipeById(id: string): Promise<any> {
    const result = await connection
    .select("*")
    .from("Cookenu_Recipes")
    .where({id})

    return result[0]
}