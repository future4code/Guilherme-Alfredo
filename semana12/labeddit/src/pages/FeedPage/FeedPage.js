import React, { useEffect, useState } from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import PostCard from '../../components/PostCard/PostCard'
import { Main } from './styled'
import useForm from '../../hooks/useForm'
import { goToPostDetailsPage } from '../../routes/coordinator'
import { useHistory } from 'react-router'

const initialForm = {
    text: "",
    title: "",
}

const FeedPage = () => {
    useProtectedPage()
    const history = useHistory()
    const [form, onChange, clear] = useForm(initialForm);
    const [posts, setPosts] = useState([])

useEffect(() => {
    getPosts()
}, [])

const handleClick = (event) => {
    event.preventDefault();
    createPost(form)
    clear();
};

const postDetails = (id) =>  {
    goToPostDetailsPage(history, id)
}

const getPosts = () => {
    axios.get(`${BASE_URL}/posts`, {
        headers: {
        Authorization: window.localStorage.getItem("token")
        }
    })
    .then((res) => {
        setPosts(res.data.posts)
        console.log(res.data)
        })
    .catch((err) => alert(err.response.data.message))
}

const createPost = () => {
    axios.post(`${BASE_URL}/posts`, form, {
        headers: {
        Authorization: window.localStorage.getItem("token")
        }
    })
    .then((res) => {
        setPosts([...posts, res])
        getPosts()
    })
    .catch((err) => console.log(err))
        
}

const postList = posts.map((post) => {
    return (
        <PostCard
            key={post.id}
            username={post.username}
            title={post.title}
            text={post.text}
            postDetails={() => postDetails(post.id)}
        >
        </PostCard>
    )
})

    return (
        <Main>
            <form onSubmit={handleClick}>
            <input
                    required
                    placeholder="título"
                    name="title"
                    value={form.title}
                    onChange={onChange}
                    type="text"
                />
                <input
                    required
                    placeholder="texto"
                    name="text"
                    value={form.text}
                    onChange={onChange}
                    type="text"
                />  
                <div>
                    <button>
                        Criar post
                    </button>
                </div>
            </form>
            <h1>FeedPage</h1>
            {postList}
        </Main>
    )
}

export default FeedPage