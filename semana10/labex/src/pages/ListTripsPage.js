import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import { goToHomePage, goToApplicationFormPage } from "../routes/coordinators";
import {DivContainer, DivButtons, Buttons} from '../components/Estilization'



export default function ListTripsPage() {
const history = useHistory();



    return (
        <DivContainer>
            <DivButtons>
            <Buttons onClick={() => goToHomePage(history)}>Voltar</Buttons>
            <Buttons onClick={() => goToApplicationFormPage(history)}>Quero viajar</Buttons>
            </DivButtons>
            <h1>List Trips Page</h1>
            
        </DivContainer>
    );
}


