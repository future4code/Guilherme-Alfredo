import { selectPostById } from "../../data/post/selectPostById"


export const getPostByIdBusiness = async (
    id: string
) => {
    const result = await selectPostById(id)

    if(!result) {
        throw new Error ("Post not found")
    }

    const post = {
        id: result[0].id,
        photo: result[0].photo,
        description: result[0].description,
        type: result[0].type,
        createdAt: result[0].created_at,
        authorId: result[0].author_id,
    }

    return post 
}