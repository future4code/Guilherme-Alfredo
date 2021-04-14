import React from 'react'
import axios from 'axios'

import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import { goToAdminHomePage, goToListTripsPage, goToLoginPage } from "../routes/coordinators";
import space from '../images/space.jpg'


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

export default function HomePage() {

    const history = useHistory();


const validation = () => {
    const token = window.localStorage.getItem("token");
    if (token === null){
        goToLoginPage(history)
    } else {
        goToAdminHomePage(history)
    }
}

    return (
        <DivContainer>
            <h1>LabeX</h1>
            <p>Embarque em uma viagem espacial!!</p>
            <DivButtons>
                <Buttons onClick={() => goToListTripsPage(history)}><b>Viagens</b></Buttons>

                <Buttons onClick={validation}><b>Area de Administrador</b></Buttons>
            </DivButtons>

        </DivContainer>
    );
}


