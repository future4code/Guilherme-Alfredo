import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import { goToHomePage } from "../routes/coordinators";
import { useForm } from '../hooks/useForm'
import { DivContainer, DivButtons, Buttons, Inputs } from '../components/Estilization'


const DivSendButton = styled.div`
    margin-top: 20px;
    display:flex;
    align-items:center;
    justify-content:center;
`

const DivForm = styled.form`
    display:flex;
    flex-direction:column;
`
const initialForm = {
    email: "",
    password: "",
}

export default function LoginPage() {
    const history = useHistory()
    const [form, onChange, resetForm] = useForm(initialForm);

    const handleClick = (event) => {
        event.preventDefault();
        login()
        resetForm();
    };

    const login = () => {
        const body = {
            email: form.email,
            password: form.password
        };
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/guilherme-mota-cruz/login", body)

            .then((res) => {
                window.localStorage.setItem("token", res.data.token)
                history.push("/admin/trips/list")
            })
            .catch((err) => {
                console.log(err)
            })
    }


    return (
        <DivContainer>
            <DivButtons>
                <Buttons onClick={() => goToHomePage(history)}>Voltar</Buttons>
            </DivButtons>

            <h1>Login</h1>
            <DivForm onSubmit={handleClick}>
                <Inputs
                    required
                    placeholder="E-mail"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"}
                    type="text"

                />
                <Inputs
                    required
                    placeholder="senha"
                    name="password"
                    value={form.password}
                    onChange={onChange}
                    type="password"
                />
                <DivSendButton>
                    <Buttons>Fazer login</Buttons>
                </DivSendButton>

            </DivForm>




        </DivContainer>
    );
}


