import connection from "../connection";


const createRecipes = async (
    id: string,
    title: string,
    description: string,
    createAt: string,
    user_id: string

) => {
    await connection
    .insert({
        id,
        title,
        description,
        createAt,
        user_id
    })
    .into ("Cookenu_Recipes")
}

export default createRecipes;


