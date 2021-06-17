import { insertPost } from "../../data/post/insertPost"
import { post } from "../../model/post"
import { generateId } from "../../services/idGenerator"



export const createPostBusiness = async (
    post: post
) => {
    
    if(
        !post.photo ||
        !post.description ||
        !post.type ||
        !post.createdAt
    ) {
        throw new Error('"photo", "description", "type", "createAt" are required')
    }

    const id: string = generateId()

    await insertPost({
        ...post,
        id
    })
}
