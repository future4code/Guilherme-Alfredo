import { post } from "../../model/post";
import { connection } from "../connection";


export const insertPost = async (
    post: post
) => {
    await connection("labook_posts")
        .insert({
            id: post.id,
            photo: post.photo,
            description: post.description,
            type: post.type,
            author_id: post.authorId
        })
}