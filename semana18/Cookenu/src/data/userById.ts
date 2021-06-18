import connection from "../connection";


export default async function userById(id: string): Promise<any> {
    const result = await connection
    .select("*")
    .from("Cookenu_Users")
    .where({id})

    return result[0]
}