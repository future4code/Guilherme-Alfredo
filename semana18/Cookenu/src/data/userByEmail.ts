
import connection from "../connection";

export default async function getUserByEmail(email: string): Promise<any> {
    const result = await connection
        .select("*")
        .from("Cookenu_Users")
        .where({ email })

    return result[0]
}

