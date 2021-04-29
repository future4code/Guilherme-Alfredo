import React from 'react'
import { DivComment, DivComments, DivUser, VoteButton, DivButtons, NumberComments } from './styled'


const CommentCard = (props) => {
    return (

        <DivComments>
            <DivUser>
                <h3>{props.username}</h3>
            </DivUser>
            <DivComment>
                <p>{props.text}</p>
            </DivComment>
            <DivButtons>
            <VoteButton>
                    <button>-</button>
                    <button>+</button>
            </VoteButton>
                    <NumberComments>Comentários</NumberComments>
            </DivButtons>
        </DivComments>
    )
}

export default CommentCard