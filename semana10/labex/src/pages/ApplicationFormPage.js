import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import { goToListTripsPage} from "../routes/coordinators";
import {DivContainer, DivButtons, Buttons, Inputs} from '../components/Estilization'

const DivButton = styled.div`
margin-top: 20px;
`


export default function ApplicationFormPage() {

const history = useHistory()


    return (
        <DivContainer>
            <DivButtons>
            <Buttons onClick={() => goToListTripsPage(history)} >voltar</Buttons>
            </DivButtons>
            <h1>Application Form Page</h1>
            <Inputs placeholder="escolha sua viagem"/>
            <Inputs placeholder="nome"/>
            <Inputs placeholder="idade"/>
            <Inputs placeholder="descrição"/>
            <Inputs placeholder="profissão"/>
            <Inputs placeholder="país de destino"/>
            <DivButton>
            <Buttons>Enviar</Buttons>
            </DivButton>
        </DivContainer>
    );
}


