import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import { goToHomePage} from "../routes/coordinators";
import space from '../images/space.jpg'
import useInput from '../hooks/useInput'

const DivContainer = styled.div`
    display:flex;
    height: 100vh;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-image: url(${space});
    background-size: 100%;
    color: white;

`
const DivButtons = styled.div`
    margin-top: 40px;
`
const Buttons = styled.button`
    padding: 20px;
    border-radius: 24px;
    background-color: #6B256F;
    color: white;
    border: none;
    width: 200px;
    margin-right: 12px;
    outline: 0;
    :hover{
    cursor: pointer; 
}
`
const Inputs = styled.input`
width: 400px;
margin-top:20px;
height: 30px;
border-radius: 24px;
border: none;
outline: 0;
`


export default function LoginPage() {
    const history = useHistory()
    const [email, handleEmail] = useInput()
    const [password, handlePassword] = useInput()

    const login = () => {
        const body = {
            email: email,
            password: password
        };
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/guilherme-mota-cruz/login", body)
        
        .then((res) => {
            window.localStorage.setItem("token", res.data.token)
            history.push("/admin/trips/list")
        })
        .catch((err) =>{
            console.log(err)
        })
    }


    return (
        <DivContainer>
            <h1>Login</h1>
            <Inputs value={email} onChange={handleEmail} placeholder=" E-mail" />
            <Inputs value={password} onChange={handlePassword} placeholder=" Senha" />
            <DivButtons>
            <Buttons onClick={() => goToHomePage(history)}>Voltar</Buttons>
            <Buttons onClick={login}>Fazer login</Buttons>
            </DivButtons>

        </DivContainer>
    );
}


