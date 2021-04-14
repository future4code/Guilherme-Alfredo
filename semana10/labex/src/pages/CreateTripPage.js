import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import { goToAdminHomePage,} from "../routes/coordinators";
import usePrivatePage from "../hooks/usePrivatePage"
import {DivContainer, DivButtons, Buttons, Inputs} from '../components/Estilization'

const DivButton = styled.div`
margin-top: 20px;
`


export default function CreateTripPage() {
usePrivatePage()
const history = useHistory()


const logout = () => {
    window.localStorage.removeItem("token");
    history.push("/login");
};

    return (
        <DivContainer>
            <DivButtons>
            <Buttons onClick={() => goToAdminHomePage(history)}>Voltar</Buttons>
            <Buttons onClick={logout}>Logout</Buttons>
            </DivButtons>
            <h1>Create Trip Page</h1>
            <Inputs placeholder="nome da viagem"/>
            <Inputs placeholder="planeta"/>
            <Inputs placeholder="data"/>
            <Inputs placeholder="descrição"/>
            <Inputs placeholder="total de dias"/>

            <DivButton>
            <Buttons>Criar</Buttons>
            </DivButton>
        </DivContainer>
    );
}


