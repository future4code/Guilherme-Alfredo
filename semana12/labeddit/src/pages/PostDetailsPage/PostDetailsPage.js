import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import useProtectedPage from '../../hooks/useProtectedPage'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import { DivForm, Main, Input, DivSendButton, Button, DivComment } from './styled'
import CommentCard from '../../components/CommentCard/CommentCard'
import useForm from '../../hooks/useForm'

const initialForm = {
    text: ""
}
const PostDetailsPage = () => {
    useProtectedPage()
    const params = useParams()
    const [form, onChange, clear] = useForm(initialForm);
    const [postDetails, setPostDetails] = useState({})
    const [postComments, setPostComments] = useState([])

    useEffect(() => {
        getPostDetail()
    }, [])

    const handleClick = (event) => {
        event.preventDefault();
        createComment(form)
        clear();
    };

    const getPostDetail = () => {
        axios.get(`${BASE_URL}/posts/${params.id}`, {
            headers: {
                Authorization: window.localStorage.getItem("token")
            }
        })
            .then((res) => {
                setPostDetails(res.data.post)
                setPostComments(res.data.post.comments)
            })
            .catch((err) => alert(err.response.data.message))
    }

    console.log(postComments)

    const createComment = () => {
        axios.post(`${BASE_URL}/posts/${params.id}/comment`, form, {
            headers: {
                Authorization: window.localStorage.getItem("token")
            }
        })
            .then((res) => {
                setPostComments([...postComments, res])
                getPostDetail()
            })
            .catch((err) => console.log(err))
    }

    const commentsList = postComments.map((comment) => {
        return (
            <CommentCard
                key={comment.id}
                username={comment.username}
                text={comment.text}
            >
            </CommentCard>
        )
    })

    return (
        <Main>
            <DivComment>
                <h2>Usuário: {postDetails.username}</h2>
                <h3>Título: {postDetails.title}</h3>
                <p>{postDetails.text}</p>
            </DivComment>

            <DivForm onSubmit={handleClick}>
                <Input
                    placeholder="deixe um comentário neste post"
                    type="text"
                    name="text"
                    value={form.text}
                    onChange={onChange}
                />
                <DivSendButton>
                    <Button>
                        enviar comentário
                    </Button>
                </DivSendButton>
            </DivForm>

            <h2>Comentários</h2>
            {commentsList}
        </Main>
    )
}

export default PostDetailsPage