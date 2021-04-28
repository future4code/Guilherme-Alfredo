import React from 'react'
import { DivComments } from './styled'


const CommentCard = (props) => {
    return (
        
        <DivComments>
            <h1>{props.title}</h1>
            <p>{props.username}</p>
            <p>{props.text}</p>
        </DivComments>
    )
}

export default CommentCard