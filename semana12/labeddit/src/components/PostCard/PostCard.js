import React from 'react'
import { DivPosts, Main } from './styled'

const PostCard = (props) => {
    return (
            <DivPosts>
            <h1>{props.title}</h1>
            <p>{props.username}</p>
            <p>{props.text}</p>
            <button onClick={props.postDetails}>Ver detalhes</button>
            </DivPosts>
    )
}

export default PostCard 