import React from 'react'
import { Button, DivButtons, DivPosts, DivText, DivTitle, VoteButton } from './styled'

const PostCard = (props) => {
    return (
        <DivPosts>
            <DivTitle>
                <h3>{props.title}</h3>
                <p>{props.username}</p>
            </DivTitle>
            <DivText>
            <p>{props.text}</p>
            </DivText>
            <DivButtons>
                <VoteButton>
                    <button>-</button>
                    <button>+</button>
                </VoteButton>
                <p></p>
                <Button onClick={props.postDetails}>Ver detalhes</Button>
            </DivButtons>
        </DivPosts>
    )
}

export default PostCard