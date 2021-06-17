import { response } from "express"
import { post } from "../../model/post"
import { connection } from "../connection"


export const selectPostById = async (
    id: string
): Promise<any> => {

    const queryResult: any = await connection("labook_posts")
    .select("*")
    .where({ id })

    if (!queryResult[0]) {
        response.statusCode = 404
        throw new Error("Post not found")
    }

    const post: post = {
        id: queryResult[0].id,
        photo: queryResult[0].photo,
        description: queryResult[0].description,
        type: queryResult[0].type,
        createdAt: queryResult[0].created_at,
        authorId: queryResult[0].author_id,
    }

    return post
}