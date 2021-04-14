import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import { goToHomePage} from "../routes/coordinators";
import useInput from '../hooks/useInput'
import {DivContainer, DivButtons, Buttons, Inputs} from '../components/Estilization'


const DivSendButton = styled.div`
    margin-top: 20px;
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
            <DivButtons>
            <Buttons onClick={() => goToHomePage(history)}>Voltar</Buttons>
            </DivButtons>

            <h1>Login</h1>

            <Inputs value={email} onChange={handleEmail} placeholder=" E-mail" />
            <Inputs value={password} onChange={handlePassword} placeholder=" Senha" />
            
            <DivSendButton>
            <Buttons onClick={login}>Fazer login</Buttons>
            </DivSendButton>
        

        </DivContainer>
    );
}


